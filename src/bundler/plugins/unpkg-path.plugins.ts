import * as esbuild from "esbuild-wasm";


export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
       
        if (args.path == "index.js") {
          return { path: args.path, namespace: "a" };
        }

        if (args.path.includes("./") || args.path.includes("../")) {
          return {
            path: new URL(args.path, `https://unpkg.com${args.resolveDir}/`).href,
            namespace: "a",
          };
        }
        return {
          path: `https://unpkg.com/${args.path}`,
          namespace: "a",
        };
      });

   
    },
  };
};
