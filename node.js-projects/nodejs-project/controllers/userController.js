import { usersList } from "../models/User.js";

export function home(req, res) {
  const userData = usersList();
  res.render("index", { users: userData });
}
