import { users } from "../model/model.js";

export function cntroller(req, res) {
  res.render("index", { users: users() });
}
