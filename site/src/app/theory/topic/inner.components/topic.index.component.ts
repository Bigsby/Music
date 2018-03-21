import { Component, Input } from "@angular/core";

import { Topic } from "../../theory.models";

@Component({
    selector: "topic-index",
    templateUrl: "./topic.index.component.html",
    styleUrls: [
        "./topic.index.component.scss"
    ]
})
export class TopicIndexCompoennt {
    @Input()topic: Topic;
}