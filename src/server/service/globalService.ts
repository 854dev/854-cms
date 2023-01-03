let isAdminUserCreated: false;
let axiosInstance;
let baseUrl;
let moduleDefinitions = [];
let moduleDefinitionsForColumns = [];
let moduleCssFiles = [];
let moduleJsFiles = [];
let moduleContentTypeConfigs = [];
let AccessToken;
let isRequestAlreadyHandled = false;
let isBackEnd = false;
let isFrontEnd = false;
let isPageBuilder = false;
let path;

export const global = {
  isBackEnd: function () {
    return window.location.pathname.startsWith("/admin");
  },
  getAppVersion: function () {
    const path = require("path");
    let packageJsonPath = path.join(__dirname, "../..", "package.json");
    var pjson = require(packageJsonPath);
    if (pjson) {
      return pjson.version;
    }
  },
  asyncForEach: async function <T = any>(array: T[], callback: Function) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  },
  setAreaMode: function (
    is_back_end = false,
    is_front_end = false,
    is_authenticated = false
  ) {
    isBackEnd = is_back_end;
    isFrontEnd = is_front_end;
    isPageBuilder = isFrontEnd && is_authenticated;
  },
};
