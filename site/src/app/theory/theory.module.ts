import { NgModule, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MusicCommonModule } from "../_common/common.module";
import { DataServiceOptions } from "./../_common/common.interfaces";
import { DataTypeMappings } from "./theory.models";
import { TheoryService } from "./theory.service";

import { TheoryRoutingModule, RoutedComponents } from "./theory-routing.module";

@Injectable()
export class TheoryDataServiceOptions extends DataServiceOptions {
    basePath: string = "theory";
    mappings = DataTypeMappings;
}

@NgModule({
    declarations: [
        RoutedComponents
    ],
    imports: [
        CommonModule,
        MusicCommonModule,
        TheoryRoutingModule
    ],
    providers: [
        TheoryService,
        {
            provide: DataServiceOptions,
            useClass: TheoryDataServiceOptions
        }
    ]
})
export class TheoryModule { }

