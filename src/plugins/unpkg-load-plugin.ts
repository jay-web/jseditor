import * as esbuild from "esbuild-wasm";
import axios from "axios";

import localForage from "localforage";

const fileCache = localForage.createInstance({
    name: "fileCaches"
})

export const unpkgLoadPlugin = (inputCode: string) => {
    return {
        name: "unpkg-load-plugin",
        setup(build:esbuild.PluginBuild){
        build.onLoad({ filter: /.*/ }, async (args: any) => {
            console.log("onLoad", args);
    
            if (args.path === "index.js") {
              return {
                loader: "jsx",
                contents: inputCode,
              };
            }
    
            // * Check in cache first, if package data available return it
            const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path);
            if(cachedResult){
              return cachedResult;
            }
    
            // * If package data is not available in cache then call it and save into cache
    
            const {data, request} = await axios.get(args.path);
            const result: esbuild.OnLoadResult = {
              loader: "jsx",
              contents: data,
              resolveDir: new URL("./", request.responseURL).pathname
            }
            await fileCache.setItem(args.path, result);
            return result;
    
    
          });
        }
    }
}