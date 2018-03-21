import { Component, OnInit, Input } from "@angular/core";
import { ILogger, IDataService } from "./../../_common/common.interfaces";

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
        this.dataService.getList(Topic)
            .then(result => this.topics = result);
    }

    constructor(
        private logger: ILogger,
        private dataService: IDataService) {
        this.logger = logger.forContext(IndexComponent);

        this.logger.log("me here!");
    }
}

@Component({
    templateUrl: "./index-topic.component.html",
    selector: "topic"
})
export class IndexTopic{
    @Input()topic: Topic;
}