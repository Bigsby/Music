import { Component, Input } from "@angular/core";

@Component({
    selector: "topic-image",
    templateUrl: "./topic.image.component.html",
    styleUrls:[
        "./topic.image.component.scss"
    ]
})
export class TopicImageComponent
{
    @Input()content: any;
}