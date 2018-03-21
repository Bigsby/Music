import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent, IndexTopic } from "./index/index.component";
import { DisclaimerComponent } from "./index/disclaimer.component";
import { TopicComponent, TopicComponents } from "./topic/topic.component";

const routes: Routes = [
    {
        path: "topic/:id",
        component: TopicComponent
    },
    {
        path: "disclaimer",
        component: DisclaimerComponent
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
    DisclaimerComponent,
    IndexTopic,
    TopicComponents
]