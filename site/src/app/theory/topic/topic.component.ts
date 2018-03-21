import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { IDataService } from "./../../_common/common.interfaces";
import { TopicContent, TopciContentItemType } from "./../theory.models";

@Component({
    templateUrl: "./topic.component.html",
    styleUrls: [
        "./topic.component.scss"
    ]
})
export class TopicComponent implements OnInit {
    content: TopicContent;

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
        private data: IDataService
    ){
    }

    ngOnInit(): void {
        this.activeRoute.params.subscribe(params =>{
            this.data.getSingle(TopicContent, params.id)
                .then(contentResponse => this.content = contentResponse);
        });
        
    }
}