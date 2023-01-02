import NodeCache from "node-cache";

import { Express } from "express";

const urlCache = new NodeCache();

const urlService = {
  startup: async (app: Express) => urlCache.flushAll(),

  addUrl: async (
    url: string,
    handler: any,
    type: any,
    title: any,
    id: any,
    previousUrl: any,
    nextUrl: any
  ) => {
    // console.log("adding url:", url, id);
    return urlCache.set(url, {
      url,
      handler,
      type,
      title,
      id,
      previousUrl,
      nextUrl,
    });
  },

  getUrls: async () => {
    const keys = urlCache.keys();
    const values = urlCache.mget(keys);
    return values;
  },

  getUrl: async (url: string) => {
    const urlKey = urlCache.get(url);
    return urlKey;
  },
};

export default urlService;
