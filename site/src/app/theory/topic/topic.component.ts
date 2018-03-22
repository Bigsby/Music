import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TheoryService } from "./../theory.service";
import { Topic, TopicContent, TopciContentItemType } from "./../theory.models";
import { TopicIndexCompoennt } from "./inner.components/topic.index.component";
import { TopicBreadcrumbComponent } from "./inner.components/topic.breadcrumb.component";

@Component({
    templateUrl: "./topic.component.html",
    styleUrls: [
        "./topic.component.scss"
    ]
})
export class TopicComponent implements OnInit {
    content: TopicContent;
    topic: Topic;
    
    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private theoryService: TheoryService
    ) {
    }

    ngOnInit(): void {
        this.activeRoute.params.subscribe(params => this.theoryService.getTopic(params.id)
        .then(topicResponse => this.topic = topicResponse)
        .then(() => this.theoryService.getContent(this.topic)
        .then(contentResponse => this.content = contentResponse)));
    }
}

export const TopicComponents = [
    TopicComponent,
    TopicIndexCompoennt,
    TopicBreadcrumbComponent
]