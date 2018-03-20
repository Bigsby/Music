import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TheoryRoutingModule } from "./theory-routing.module";
import { TheoryAppComponent } from "./_component/appcomponent";

@NgModule({
    declarations: [
        TheoryAppComponent
    ],
    imports: [
        CommonModule,
        TheoryRoutingModule
        //   BrowserModule,
        //   AppRoutingModule
    ],
    providers: []
})
export class TheoryModule { }