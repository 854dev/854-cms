import { Express } from "express";
import createRest from "./restBase";

const restInit = (app: Express) => {
  const userRest = createRest({ resourceName: "user" }, app, {});
  const contentRest = createRest({ resourceName: "content" }, app, {});

  return {
    userRest,
    contentRest,
  };
};

export default restInit;
