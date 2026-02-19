// File: scripts/tests/retryFailedBackstop.js
import fs from 'fs';
import { execSync } from 'child_process';

// 1. Get arguments passed from the bash script
const theme = process.argv[2];
const configName = process.argv[3];

if (!theme || !configName) {
  console.error(`[Smart Retry] Missing arguments. Usage: node retryFailedBackstop.js <theme> <configName>`);
  process.exit(1);
}

// 2. Reconstruct the config file and report paths
const backstopConfigFile = `backstop-${configName}_${theme}.json`;

// The bash script replaces hyphens with underscores for the report folder (e.g., non-responsive -> non_responsive)
const reportFolder = configName.replace(/-/g, '_');
const htmlReportPath = `./reports/${theme}/html_report/${reportFolder}`;
const jsonConfigPath = `${htmlReportPath}/config.js`;

if (!fs.existsSync(jsonConfigPath)) {
  console.error(`[Smart Retry] No report found at ${jsonConfigPath}. Cannot perform targeted retry.`);
  process.exit(1);
}

// 3. Extract and parse the test results
// Backstop writes the report as a JS function wrapper: report({ ... });
// We strip the function wrapper so we can parse it as pure JSON.
const configJsContent = fs.readFileSync(jsonConfigPath, 'utf8');
const jsonString = configJsContent.replace(/^report\(/, '').replace(/\);?$/, '');
let reportData;

try {
  reportData = JSON.parse(jsonString);
} catch (err) {
  console.error(`[Smart Retry] Failed to parse Backstop JSON report: ${err.message}`);
  process.exit(1);
}

// 4. Identify the broken components
const failedTests = reportData.tests.filter((t) => t.status === 'fail');

if (failedTests.length === 0) {
  console.log(`[Smart Retry] No failed tests found in the report for ${theme} - ${configName}.`);
  process.exit(0);
}

console.log(`[Smart Retry] Found ${failedTests.length} flaky test(s). Preparing targeted retry...`);

// 5. Build the regex filter for the Backstop command
// Safely extract the label whether Backstop put it in 'pair.label' or 'meta.label'
const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const filterRegex = failedTests
  .map((t) => {
    const label = (t.pair && t.pair.label) || (t.meta && t.meta.label) || 'UnknownTest';
    return `^${escapeRegExp(label)}$`;
  })
  .join('|');

// Construct the targeted Backstop command
const command = `npx backstop test --config=${backstopConfigFile} --filter="${filterRegex}"`;

// 6. Execute the Retry Loop
const MAX_RETRIES = 2; // Strict but fair limit to avoid infinite hangs on real bugs
let attempt = 1;
let testsPassed = false;

while (attempt <= MAX_RETRIES) {
  console.log(`\n[Smart Retry] --- Attempt ${attempt} of ${MAX_RETRIES} ---`);
  console.log(`[Smart Retry] Executing: ${command}`);

  try {
    // Run the targeted backstop test.
    // stdio: 'inherit' streams the colored Backstop logs directly into the Jenkins console UI.
    execSync(command, { stdio: 'inherit' });

    console.log(`\n[Smart Retry] SUCCESS: All targeted flaky tests passed on attempt ${attempt}!`);
    testsPassed = true;
    break; // They passed! Break out of the while loop immediately.
  } catch (error) {
    console.error(`\n[Smart Retry] WARNING: Targeted tests still failing on attempt ${attempt}.`);
    attempt++;
  }
}

// 7. Final Verdict
if (!testsPassed) {
  console.error(`\n[Smart Retry] FATAL: Tests are still failing after ${MAX_RETRIES} targeted retries.`);
  console.error(`[Smart Retry] This is highly likely a legitimate visual regression, not a system glitch.`);
  process.exit(1); // Tell Jenkins to turn the stage red
} else {
  process.exit(0); // Tell Jenkins to turn the stage green
}
