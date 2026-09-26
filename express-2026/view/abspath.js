import path from "path";

const absPath = path.resolve("view");
export const finalPath = (basename) => {
  return absPath + basename;
};
