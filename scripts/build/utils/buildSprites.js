import fs from 'fs';
import path from 'path';
import SVGSpriter from 'svg-sprite';
import ora from 'ora';

async function buildSprite() {
  const dest = 'dist/sprite';
  const spriteConfig = {
    shape: {
      transform: []
    },
    mode: {
      symbol: {
        sprite: 'chi-icons.svg',
        dest,
        example: true
      },
    },
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false,
      namespaceIDs: false,
      namespaceClassnames: false,
      dimensionAttributes: false
    }
  };

  const sprite = new SVGSpriter(spriteConfig);
  const svgDir = path.join('./src/chi/components/icons/svg');
  const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));

  const spinner = ora('[CHI]: Building SVG sprites').start();

  try {
    svgFiles.forEach(file => {
      const filePath = path.join(svgDir, file);
      sprite.add(filePath, null, fs.readFileSync(filePath, 'utf-8'));
    });

    fs.mkdirSync(dest, { recursive: true });

    sprite.compile((error, result) => {
      if (error) {
        spinner.fail(`[CHI]: Error during sprite compilation: ${error.message}`);
        return;
      }

      for (const mode in result) {
        for (const resource in result[mode]) {
          fs.writeFileSync(path.join(dest, 'sprite.symbol.html'), result[mode][resource].contents);
          fs.writeFileSync(path.join(dest, 'chi-icons.svg'), result[mode].sprite.contents);
        }
      }

      spinner.succeed('[CHI]: SVG sprites built successfully');
    });
  } catch (error) {
    spinner.fail(`[CHI]: Error during SVG sprite building: ${error.message}`);
  }
}

buildSprite().catch(console.error);
