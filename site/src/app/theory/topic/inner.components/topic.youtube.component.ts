import { Component, Input } from "@angular/core";

@Component({
    selector: "topic-youtube",
    templateUrl: "./topic.youtube.component.html",
    styleUrls: [
        "./topic.youtube.component.scss"
    ]
})
export class TopicYouTubeComponent {
    @Input() video: string;
}