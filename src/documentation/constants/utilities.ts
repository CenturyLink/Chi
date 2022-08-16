const redirectionScript = (chiVersion: string): string => {
  return `
const pageURL = window.location.href;

if (pageURL.includes('latest')) {
    const redirectionURL = pageURL.split('latest').join('${chiVersion}');

    window.location.href = redirectionURL;
}
`;
};

export default redirectionScript;
