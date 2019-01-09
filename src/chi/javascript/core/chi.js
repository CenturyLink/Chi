const version = '0.1';
let chi = {
  version: version,
  expando: "chi" + (version + Math.random()).replace( /\D/g, "" ),
  componentIndex: 0,
  registeredComponents: {}
};

export {chi};
