import * as esbuild from "esbuild-wasm";
import {unpkgPathPlugin} from "./plugins/unpkg-path.plugins";
import { unpkgLoadPlugin } from "./plugins/unpkg-load-plugin";

let service: esbuild.Service;


export default async (rawCode:string) => {
    if(!service){
        service =  await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        });
    }

    try{
        let result = await service.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins:[unpkgPathPlugin(), unpkgLoadPlugin(rawCode)],
            define:{
                'process.env.NODE_ENV': '"production"',
                global: 'window'
            }
        });
    
        
    return {
        code: result.outputFiles[0].text,
        error: ''
    } 
    }catch(error: any){
       
        return  {
            code : '',
            error: error.message
        }
      
    }
        
   
}