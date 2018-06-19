import prism from 'prismjs';
import 'prismjs/components/prism-bash';

const extensions = {
  html: 'markup',
  sass: 'css',
  scss: 'css',
  svg: 'markup',
  sh: 'bash'
};

export function getLang(lang) {
  if (!prism.languages.hasOwnProperty(lang)) {
    return extensions[lang] || 'markup';
  }

  return lang;
}

export function highlight(code, lang) {
  return prism.highlight(code, prism.languages[getLang(lang)]);
};
