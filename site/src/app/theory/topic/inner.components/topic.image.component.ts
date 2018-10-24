import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

import { TopicBaseComponent } from "./topic.base.component";

@Component({
    selector: "topic-image",
    templateUrl: "./topic.image.component.html",
    styleUrls: [
        "./topic.image.component.scss"
    ]
})
export class TopicImageComponent extends TopicBaseComponent {
    constructor(private sanitizer: DomSanitizer) {
        super();
    }

    get images(): ImageDefinition[] {
        if (typeof this.content === "string") {
            return [{
                src: this.content
            }];
        }

        if (this.content.src) {
            return [{
                src: this.sanitizer.bypassSecurityTrustResourceUrl(this.content.src),
                class: this.content.class
            }];
        }

        if (this.content.images instanceof Array && this.content.images.length) {
            return this.content.images.map(i => this.mapItem(i));
        }
    }

    private mapItem(item: any): ImageDefinition {
        if (typeof item === "string") {
            return {
                src: this.sanitizer.bypassSecurityTrustResourceUrl(item)
            };
        }

        return {
            src: this.sanitizer.bypassSecurityTrustResourceUrl(item.src),
            class: item.class
        }
    }
}

class ImageDefinition {
    src: string | SafeResourceUrl;
    class?: string;
}