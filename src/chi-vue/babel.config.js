module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', { jsx: { isCustomElement: (tag) => tag.startsWith('chi-') } }],
    '@babel/preset-env',
  ],
  plugins: [
    '@babel/plugin-syntax-numeric-separator',
    '@babel/proposal-class-properties',
    '@babel/syntax-object-rest-spread',
    '@babel/plugin-syntax-optional-chaining',
  ],
};
