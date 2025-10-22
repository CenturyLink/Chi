module.exports = async (page, scenario, viewport, isReference, browserContext) => {
  await require('./loadCookies.cjs')(browserContext, scenario);
};
