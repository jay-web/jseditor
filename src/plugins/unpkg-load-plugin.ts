import * as esbuild from "esbuild-wasm";
import axios from "axios";

import localForage from "localforage";

const fileCache = localForage.createInstance({
  name: "fileCaches",
});

export const unpkgLoadPlugin = (inputCode: string) => {
  return {
    name: "unpkg-load-plugin",
    setup(build: esbuild.PluginBuild) {
      // * onLoad for index.js file
      build.onLoad({ filter: /(^index\.js$)/ }, () => {
        return {
          loader: "jsx",
          contents: inputCode,
        };
      });

      // * onLoad to check required package in cache
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        // * Check in cache first, if package data available return it
        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        );
        if (cachedResult) {
          return cachedResult;
        }
      });

      // * onLoad for .css files
      build.onLoad({ filter: /.css$/ }, async (args: any) => {
        // * If package data is not available in cache then call it and save into cache
        const { data, request } = await axios.get(args.path);

        let escaped = data
          .replace(/\n/g, "")
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");

        const contents = `
                const style = document.createElement('style');
                style.innerText = '${escaped}';
                document.head.appendChile(style);
            `;

        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents: contents,
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        await fileCache.setItem(args.path, result);
        return result;
      });

      // * OnLoad to handle other relative path of .js files
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        // * If package data is not available in cache then call it and save into cache

        const { data, request } = await axios.get(args.path);
        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents: data,
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        await fileCache.setItem(args.path, result);
        return result;
      });
    },
  };
};
