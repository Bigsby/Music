import { Component, Input } from "@angular/core";

@Component({
    selector: "topic-text",
    templateUrl: "./topic.text.component.html",
    styleUrls: [
        "./topic.text.component.scss"
    ]
})
export class TopicTextComponent {
    @Input() text: string;
}