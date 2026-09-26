import path from "path";

export function absPath(basename) {
  const absPath = path.resolve("");
  console.log(absPath);
  return absPath + basename;
}
