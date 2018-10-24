import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TheoryService } from "./../theory.service";
import { Topic, TopicType, TopicContent, TopicContentItemType } from "./../theory.models";
import { TopicIndexCompoennt } from "./inner.components/topic.index.component";
import { TopicBreadcrumbComponent } from "./inner.components/topic.breadcrumb.component";
import { TopicTextComponent } from "./inner.components/topic.text.component";
import { TopicYouTubeComponent } from "./inner.components/topic.youtube.component";
import { TopicImageComponent } from "./inner.components/topic.image.component";
import { TopicTableComponent } from "./inner.components/topic.table.component";

@Component({
    templateUrl: "./topic.component.html",
    styleUrls: [
        "./topic.component.scss"
    ]
})
export class TopicComponent implements OnInit {
    content: TopicContent;
    topic: Topic;
    previous: Topic;
    next: Topic;
    itemType = TopicContentItemType;
    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private theoryService: TheoryService
    ) {
    }

    ngOnInit(): void {
        this.activeRoute.params.subscribe(params => this.theoryService.getTopic(params.id)
            .then(topicResponse => this.topic = topicResponse)
            .then(() => {
                this.setNextAndPrevious();
                if (this.topic.type === TopicType.index) {
                    this.content = {
                        items:[{
                            type: TopicContentItemType.index
                        }]
                    }
                } else {
                    this.theoryService.getContent(this.topic)
                        .then(contentResponse => this.content = contentResponse);
                }
            }));
    }

    private setNextAndPrevious() {
        if (!this.topic) {
            return;
        }

        this.next = this.theoryService.getNext(this.topic);
        this.previous = this.theoryService.getPrevious(this.topic);
    }
}

export const TopicComponents = [
    TopicComponent,
    TopicBreadcrumbComponent,
    TopicIndexCompoennt,
    TopicTextComponent,
    TopicYouTubeComponent,
    TopicImageComponent,
    TopicTableComponent
]