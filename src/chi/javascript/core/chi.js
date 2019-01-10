const version = '0.1';
let chi = {
  version: version,
  expando: "chi" + (version + Math.random()).replace( /\D/g, "" ),
  componentIndex: 0,
  registeredComponents: {},
  responsiveBreakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

export {chi};
