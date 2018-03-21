import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent, IndexTopic } from "./index/index.component";

const routes: Routes = [
    {
      path: '',
      component: IndexComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TheoryRoutingModule { }

export const RoutedComponents = [
    IndexComponent,
    IndexTopic
]