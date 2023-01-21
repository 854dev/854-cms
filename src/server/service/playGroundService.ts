import axios from "axios";
import { Express } from "express";

export default (app: Express) => {
  console.log("playGround Service start");

  app.get("/playground", async (req, res) => {
    const reqest = await axios.post("http://localhost:3018/user", {
      // username: "hello",
      salt: "hello",
      hash: "hello",
      profile: "hello",
    });
    // console.log(reqest);

    res.json(reqest.data);
  });

  console.log("playGround Service end");
};
