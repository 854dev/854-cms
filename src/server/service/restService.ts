import { Express } from "express";
import { DataSource } from "typeorm";

import { entityMap, EntityMap } from "data/entityMap";

function createRest<T extends { id?: any }>(
  option: {
    resourceName: keyof EntityMap;
  },
  app: Express,
  datasource: DataSource
) {
  const { resourceName } = option;
  const resourceEntity = entityMap[resourceName];
  const repository = datasource.getRepository(resourceEntity);

  /** DAL SERVICE */
  const dalServices = {
    get: (id?: string) => {
      if (id) {
        const result = repository.findOneBy({ id });
        return result;
      }
      const result = repository.find();
      return result;
    },
    post: (form: T) => {
      const entity = Object.assign(repository, form);
      repository.save(entity);
    },
    put: (form: T) => {
      const entity = Object.assign(repository, form);
      repository.save(entity);
    },
    delete: (id: string) => {
      repository.softDelete(id);
    },
  };

  /** ROUTE - LIST */
  app.get(`/${resourceName}`, async (req, res) => {
    const result = await dalServices.get();
    res.json(result);
  });

  /** ROUTE - GET */
  app.get(`/${resourceName}/:resourceId/`, async (req, res) => {
    const { resourceId } = req.params;
    const result = await dalServices.get(resourceId);
    res.json(result);
  });

  /** ROUTE - POST */
  app.post(`/${resourceName}/`, async (req, res) => {
    const { body } = req;

    const result = await dalServices.post(body);
    res.send({ hello: "POST" });
  });

  /** ROUTE - PUT */
  app.put(`/${resourceName}/:resourceId/`, async (req, res) => {
    const { body } = req;

    const result = await dalServices.put(body);
    res.send({ hello: "put" });
  });

  /** ROUTE - DELETE */
  app.delete(`/${resourceName}/:resourceId/`, async (req, res) => {
    const { resourceId } = req.params;
    const result = await dalServices.delete(resourceId);

    res.send({ hello: "delete" });
  });
  return dalServices;
}

const restInit = (app: Express, datasource: DataSource) => {
  const userRest = createRest({ resourceName: "User" }, app, datasource);
  // const contentRest = createRest({ resourceName: "Content" }, app, datasource);

  return {
    userRest,
    // contentRest,
  };
};

export default restInit;
