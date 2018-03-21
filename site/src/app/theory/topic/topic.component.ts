import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TheoryService } from "./../theory.service";
import { TopicContent, TopciContentItemType } from "./../theory.models";
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
    noContent: TopicContent = {
        title: "N/A"
    };
    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private theoryService: TheoryService
    ) {
    }

    ngOnInit(): void {
        this.activeRoute.params.subscribe(params => this.theoryService.getContent(params.id)
        .then(contentResponse => this.content = contentResponse || this.noContent)
        .catch(error => this.content = this.noContent));
        
    }
}

export const TopicComponents = [
    TopicComponent,
    TopicIndexCompoennt,
    TopicBreadcrumbComponent
]