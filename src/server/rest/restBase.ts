import { Express } from "express";

function createRest<T extends { id?: any }>(
  option: {
    resourceName: string;
  },
  app: Express,
  entity: T
) {
  const { resourceName } = option;

  /** DAL SERVICE */
  const dalServices = {
    get: (id?: string) => {
      /** id 없으면 전체 */
      if (id) {
        return id;
      }
      return "id list";
    },
    post: (form: T) => {
      /** 해당 자원을 DB에 등록 */
    },
    put: (form: T) => {
      /** 해당 자원을 DB에 등록 */
      if (form.id) {
      }
    },
    delete: (id: string) => {
      /** 해당 자원을 DB에서 삭제 */
    },
  };

  /** ROUTE - LIST */
  app.get(`/${resourceName}`, (req, res) => {
    res.send({ hello: "ss" });
  });
  /** ROUTE - GET */
  app.get(`/${resourceName}/:resourceId/`, (req, res) => {
    const { resourceId } = req.params;
    res.send({ hello: resourceId });
  });
  /** ROUTE - POST */
  app.post(`/${resourceName}/`, (req, res) => {
    res.send({ hello: "POST" });
  });
  /** ROUTE - PUT */
  app.put(`/${resourceName}/:resourceId/`, (req, res) => {
    const { resourceId } = req.params;
    res.send({ hello: resourceId });
  });
  /** ROUTE - DELETE */
  app.delete(`/${resourceName}/:resourceId/`, (req, res) => {
    const { resourceId } = req.params;
    res.send({ hello: resourceId });
  });
  return dalServices;
}
export default createRest;
