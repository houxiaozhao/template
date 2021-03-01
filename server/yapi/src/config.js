const path = require('path');

module.exports = {
  template: 'axios',
  globalCode: '',
  categoryId: null,
  methodName(apipath, method) {
    const apipaths = apipath.split('/');
    let name = [];
    name = [method.toLowerCase()];
    if (apipaths.length > 1) {
      name = [].concat(name, [
        apipaths[apipaths.length - 2],
        apipaths[apipaths.length - 1],
      ]);
    } else if (apipaths.length === 1) {
      name = [].concat(name, [apipaths[0]]);
    }
    name = name.map(p => {
      return p.replace(/[^a-zA-Z0-9\_]+/g, '');
    });
    return name.join('_');
  },
  server: '',
  token: '项目token',
  dist: path.resolve(process.cwd(), 'yapi/yapi-gen-js-code.js'),
  enableValidte: false,
};
