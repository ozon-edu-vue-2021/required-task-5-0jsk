const context = require.context("@/modules", true, /store\.js$/);

export const modules = context.keys().reduce((modules, filename) => {
  const moduleName = filename
    .split("/")[1]
    .replace(/^\w/, (c) => c.toUpperCase());

  modules[moduleName] = context(filename)?.default ?? context(filename);
  return modules;
}, {});
