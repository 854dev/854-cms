import NodeCache from "node-cache";
let cache: NodeCache;

export const cacheService = {
  startup: function () {
    if (process.env.MODE == "production") {
      cache = new NodeCache({ stdTTL: 60 * 60, checkperiod: 600 });
    }
  },

  getCache: function () {
    if (process.env.MODE === "production") {
      return cache;
    }

    function get() {}
    function set() {}
    return { get, set };
  },
};

export default cacheService;
