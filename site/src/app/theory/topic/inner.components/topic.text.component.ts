import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: "topic-text",
    templateUrl: "./topic.text.component.html",
    styleUrls: [
        "./topic.text.component.scss"
    ]
})
export class TopicTextComponent {
    @Input() content: any;
    constructor(private sanitizer: DomSanitizer){

    }

    get texts(): SafeHtml[] {
        if (typeof this.content === "string") {
            return [this.sanitizer.bypassSecurityTrustHtml(this.content)];
        }

        let result = [];
        if (this.content.text) {
            result.push(this.sanitizer.bypassSecurityTrustHtml(this.content.text));
        }

        if (this.content.texts instanceof Array) {
            result = result.concat(this.content.texts.map(t => this.sanitizer.bypassSecurityTrustHtml(t)));
        }

        return result;

    }

    get title(): SafeHtml {
        if (this.content.title) {
            return this.sanitizer.bypassSecurityTrustHtml(this.content.title);
        }
        return "";
    }
}

// @Component({
//     selector: "t-u",
//     template: "UUU",
//     styles: [
//         ":host { text-decoration: underline }"
//     ]
// })
// export class UnderlineTextComponent {
//     constructor(){
//         alert("underlying");
//     }
// }

// @Component({
//     selector: "t-r",
//     template: "RRR<ng-content></ng-content>", 
//     styles: [
//         ":host { font-family: 'Times New Roman', Times, serif }"
//     ]
// })
// export class RomanTextComponent {
//     constructor(){
//         alert("underlying");
//     }
// }