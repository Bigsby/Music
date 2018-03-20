import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheoryAppComponent } from "./_component/appcomponent";

const routes: Routes = [
    {
      path: '',
      component: TheoryAppComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TheoryRoutingModule { }