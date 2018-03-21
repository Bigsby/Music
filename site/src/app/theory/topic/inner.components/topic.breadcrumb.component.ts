import { Component, Input } from "@angular/core";

import { Topic } from "./../../theory.models";

@Component({
    selector: "topic-breadcrumb",
    templateUrl: "topic.breadcrumb.component.html",
    styleUrls: [
        "topic.breadcrumb.component.scss"
    ]
})
export class TopicBreadcrumbComponent{
    @Input() topic: Topic;
}