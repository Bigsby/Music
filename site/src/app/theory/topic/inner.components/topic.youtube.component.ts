import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { TopicBaseComponent } from "./topic.base.component";

@Component({
    selector: "topic-youtube",
    templateUrl: "./topic.youtube.component.html",
    styleUrls: [
        "./topic.youtube.component.scss"
    ]
})
export class TopicYouTubeComponent extends TopicBaseComponent {
    private youTubeBaseURL = "https://www.youtube.com/embed/";
    constructor(private sanitizer: DomSanitizer) {
        super();
    }

    get videoUrl(): SafeUrl{
        let url = "";
        if (typeof this.content === "string") {
            url = this.content;
        } else {
            url = this.content.videoId;
        }

        return this.sanitizer.bypassSecurityTrustResourceUrl(this.youTubeBaseURL + url);
    }

    get style(): any{
        return this.content.style;
    }
}