import { DataServiceTypeMapping } from "./../_common/common.interfaces";

export class Topic {
    id: string;
    name: string;
    description?: string;
    index: number;
    parent?: Topic;
    subTopics?: Topic[];
    isRoot: boolean;
}

export class TopicContent {
    items?: TopicContentItem[];
}

export class TopicContentItem {
    type: string;
    content: any;
}

export const TopciContentItemType = {
    index: "index",
    text: "text",
    youTube: "youTube",
    didYouKnow: "didYouKnow",
    image: "image",
    link: "link",
    notesTable: "notesTable",
    changes: "changes"
}

export const DataTypeMappings: DataServiceTypeMapping = {
    "topics": Topic,
    "topics/": TopicContent
};