import { Express } from "express";
import { DataSource } from "typeorm";

import entityMap, { EntityMap } from "data/entityMap";

function createRest<T extends { id?: any }>(
  option: {
    resourceName: keyof EntityMap;
  },
  app: Express,
  datasource: DataSource
) {
  const { resourceName } = option;
  const resourceEntity = entityMap[resourceName];

  console.log(datasource.isInitialized);
  console.log(datasource.options.entities);

  console.log(resourceEntity);
  console.log(resourceEntity);
  console.log(resourceEntity);
  console.log(resourceEntity);
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
      // TODO form 이 엔티티 저장에 필요한 데이터는 다갖고 있는지?

      /** 해당 자원을 DB에 등록 */
      const entity = Object.assign(repository, form);
      repository.save(entity);
    },
    put: (form: T) => {
      // TODO form 이 엔티티 저장에 필요한 데이터는 다갖고 있는지?
      if (form.id) {
        const entity = Object.assign(repository, form);
        repository.save(entity);
      }
    },
    delete: (id: string) => {
      /** 해당 자원을 DB에서 삭제 */
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
  const contentRest = createRest({ resourceName: "Content" }, app, datasource);

  return {
    userRest,
    contentRest,
  };
};

export default restInit;
