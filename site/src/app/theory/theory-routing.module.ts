import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent, IndexTopic } from "./index/index.component";
import { TopicComponent } from "./topic/topic.component";

const routes: Routes = [
    {
        path: "topic/:id",
        component: TopicComponent
    },
    {
        path: '',
        component: IndexComponent
    },
    {
        path: "**",
        redirectTo: "theory",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TheoryRoutingModule { }

export const RoutedComponents = [
    IndexComponent,
    IndexTopic,
    TopicComponent
]