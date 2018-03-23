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

    get images(): ImageDefinition[]{
        if (typeof this.content === "string"){
            return [{
                src: this.content
            }];
        }

        if (this.content.images instanceof Array && this.content.images.length){
            return this.content.images.map(this.mapItem);
        }
    }
    
    private mapItem(item: any): ImageDefinition{
        if (typeof item === "string"){
            return {
                src: item
            };
        }

        return {
            src: item.src,
            style: item.style
        }
    }
}

class ImageDefinition{
    src: string;
    style?: any;
}