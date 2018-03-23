import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: "topic-youtube",
    templateUrl: "./topic.youtube.component.html",
    styleUrls: [
        "./topic.youtube.component.scss"
    ]
})
export class TopicYouTubeComponent {
    @Input() content: string;
    private youTubeBaseURL = "https://www.youtube.com/embed/";
    constructor(private sanitizer: DomSanitizer) {

    }

    get videoUrl(): SafeUrl{
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.youTubeBaseURL + this.content);
    }
}