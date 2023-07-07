import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { enviroment } from "src/enviroments/enviroment";


export const app_service_config = new InjectionToken<AppConfig>('app.config')


export const app_config : AppConfig ={
    apiUrl : enviroment.apiUrl
}