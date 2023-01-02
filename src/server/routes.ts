import { Express } from "express";
export const loadRoutes = async function (app: Express) {
  // authService.startup(app);
  // adminService.startup(app);
  // formService.startup(app);
  // backupService.startup(app);
  // backupRestoreService.startup(app);

  let page = "";
  let adminPage = "";

  (async () => {
    // await dalService.startup(app);
    // await cacheService.startup();
    // await moduleService.startup(app);
    // await menuService.startup();
    // await mediaService.startup();
    // await siteSettingsService.startup();
    // await themeSettingsService.startup();
    // await userService.startup(app);
    // await assetService.startup(app);
    // await pageBuilderService.startup(app);
    // await pageBuilderService.startup(app);
    // await testService.startup(app);
    // await cssService.startup(app);
    // await installService.startup(app);

    await emitterService.emit("startup", { app: app });

    //load catch-all last
    this.loadRoutesCatchAll(app);

    await emitterService.emit("started", { app: app });
  })();

  app.get("*", async function (req, res, next) {
    globalService.AccessToken = "todo-access-token";

    if (req.session) {
      req.session.nowInMinutes = Math.floor(Date.now() / 60e3);
    }

    next();
  });

  // app.get("/hbs", async function (req, res) {
  //   res.render("home");
  // });

  // app.get("/nested-forms-list*", async function (req, res) {
  //   let contentTypesRaw = await dataService.contentTypesGet();
  //   let contentTypes = contentTypesRaw.map(function (contentType) {
  //     return {
  //       _id: contentType.systemId,
  //       type: "form",
  //       title: contentType.title,
  //     };
  //   });
  //   let sorted = _.sortBy(contentTypes, "title");

  //   res.send(sorted);
  // });

  // app.get("/form/*", async function (req, res) {
  //   let moduleSystemId = req.path.replace("/form/", "");
  //   let contentType = await dataService.contentTypeGet(moduleSystemId, req);
  //   let form = await formService.getFormJson(contentType, req);
  //   res.send(form);
  // });

  // app.get("/health", async function (req, res) {
  //   res.status(200).send("ok");
  // });

  // app.get("/health-database", async function (req, res) {
  //   let content = await dataService.getContentByUrl("/");
  //   if (content && content.contentTypeId === "page") {
  //     res.status(200).send("ok");
  //   } else {
  //     res.status(500).send("database offline");
  //   }
  // });

  app.get("/theme1", async function (req, res) {
    let data = {};
    res.render("sandbox", { layout: theme, data: data });
  });

  app.get("/theme2", async function (req, res) {
    let data = {};
    res.render("sandbox", { layout: "theme2.handlebars", data: data });
  });

  app.get("/admin/sandbox", async function (req, res) {
    let data = {};
    res.render("sandbox", { layout: "admin.handlebars", data: data });
  });

  app.post("/dropzone-upload", async function (req, res) {
    console.log("dropzone-upload req.files.file", req.files.file);
    await fileService.uploadWriteFile(req.files.file, req.sessionID);
    res.sendStatus(200);
  });

  app.post("/form-submission", async function (req, res) {
    let payload = req.body.data.data ? req.body.data.data : req.body.data;
    let contentTypeId = payload.contentType;
    if (payload) {
      let options = { data: payload, sessionID: req.sessionID };

      await emitterService.emit("afterFormSubmit", options);

      // if (!payload.contentType.startsWith("user")) {
      //   if (submission.id || submission.data.id) {
      //     await editInstance(entity, refresh, contentType);
      //   } else {
      //     await createInstance(entity, true, contentType);
      //   }
      // }
      let entity;

      let contentType = await dataService.contentTypeGet(contentTypeId, req);

      if (payload.id) {
        //edit existing
        if (contentTypeId === "user") {
          //do nothing, already managed by hook
          // entity = await dataService.userUpdate(payload, req.sessionID);
        } else {
          entity = await dataService.editInstance(payload, req.sessionID);
        }
      } else {
        //create new
        let newContent = { contentType: payload.contentType, data: payload };
        entity = await dataService.contentCreate(
          newContent,
          true,
          req.sessionID
        );
      }

      let redirectTo = "/";
      // if (entity && entity.contentTypeId === "page") {
      //   let isBackEnd = globalService.isBackEnd();
      //   if (isBackEnd) {
      //     redirectTo = `/admin/content/edit/page/${entity.id}`;
      //   } else {
      //     // window.location.href = payload.data.url;
      //     redirectTo = payload.data.url;
      //   }
      // }
      // else if (refresh) {
      //   fullPageUpdate();
      // }
      let successAction;

      if (contentType.data?.states) {
        if (contentType.data.states.postSubmission === "redirectToUrl") {
          successAction = `redirectToUrl('${contentType.data.states.redirectUrl}');`;
        } else if (contentType.data.states.postSubmission === "showMessage") {
          successAction = `postSubmissionSuccessMessage("${contentType.data.postSubmission.message}");`;
        } else if (contentType.data.states.postSubmission === "doNothing") {
          successAction = `javascript:void(0);`;
        } else if (contentType.data.states.postSubmission === "callFunction") {
          successAction = contentType.data.states.functionToCall;
        }
      }

      //if admin, redirect to edit page
      let isBackEnd =
        req.body && req.body.url && req.body.url.startsWith("/admin");
      if (
        isBackEnd &&
        (contentTypeId === "user-register" || contentTypeId === "user")
      ) {
        successAction = `redirectToUrl('/admin/users');`;
        // TODO: fix so that admin is redirected to user edit form
        // successAction = `redirectToUrl('/admin/user/edit/${entity.id}');`;
      } else if (isBackEnd && !successAction) {
        successAction = `redirectToUrl('/admin/content/edit/${contentTypeId}/${entity.id}');`;
      } else if (!isBackEnd && contentTypeId === "page") {
        successAction = `redirectToUrl('${entity.url}');`;
      }

      successAction = successAction ?? "fullPageUpdate();";

      res.send({ successAction });
    }
  });

  app.post("*", async function (req, res, next) {
    await emitterService.emit("postBegin", { req: req, res: res });

    if (!req.isRequestAlreadyHandled) {
      next();
    }
  });
};
