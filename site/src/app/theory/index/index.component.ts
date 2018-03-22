import { Component, OnInit, Input } from "@angular/core";
import { ILogger } from "./../../_common/common.interfaces";

import { TheoryService } from "./../theory.service";
import { Topic } from "./../theory.models";

@Component({
    templateUrl: "./index.component.html",
    styleUrls: [
        "./index.component.scss"
    ]
})
export class IndexComponent implements OnInit {
    topics: Topic[];
    ngOnInit(): void {
        this.theoryService.getTopics()
            .then(result => this.topics = result);
    }

    constructor(
        private theoryService: TheoryService) {
    }
}

@Component({
    templateUrl: "./index-topic.component.html",
    styleUrls:[
        "./index-topic.component.scss"
    ],
    selector: "topic"
})
export class IndexTopic{
    @Input()topic: Topic;
    @Input()index: number;
}