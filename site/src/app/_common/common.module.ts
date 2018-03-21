import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import * as CommonInterfaces from "./common.interfaces";
import { DataService } from "./implementations/data.service";
import { ConsoleLogger } from "./implementations/loggers";
import { environment } from './../../environments/environment';

@NgModule({
    providers:[{
        provide: CommonInterfaces.ILogger,
        useClass: ConsoleLogger
    },{
        provide: CommonInterfaces.IDataService,
        useClass: DataService
    }],
    imports:[
        HttpModule
    ]
})
export class MusicCommonModule {
    
}