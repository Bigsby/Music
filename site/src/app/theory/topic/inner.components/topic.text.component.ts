import { Component, Input } from "@angular/core";

@Component({
    selector: "topic-text",
    templateUrl: "./topic.text.component.html",
    styleUrls: [
        "./topic.text.component.scss"
    ]
})
export class TopicTextComponent {
    @Input() content: any;
    get text(): string {
        if (typeof this.content === "string") {
            return this.content;
        }

        return this.content.text;

    }

    get title(): string {
        if (this.content.title) {
            return this.content.title;
        }
        return "";
    }
}

@Component({
  selector: 'u',
  template: `
   <span><ng-content></ng-content></span>
  `,
  styles: [
      "span { text-decoration: underline }"
  ]
})
export class UnderlineTextComponent {
}