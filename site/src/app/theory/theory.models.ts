import { DataServiceTypeMapping } from "./../_common/common.interfaces";

export class Topic {
    id: string;
    name: string;
    type?: string;
    description?: string;
    index: number;
    parent?: Topic;
    subTopics?: Topic[];
    isRoot: boolean;
}

export class TopicContent {
    items: TopicContentItem[];
}

export class TopicContentItem {
    type: string;
    content?: any;
}

export const TopicContentItemType = {
    index: "index",
    text: "text",
    youTube: "youTube",
    didYouKnow: "didYouKnow",
    image: "image",
    link: "link",
    notesTable: "notesTable",
    changes: "changes",
    table: "table"
}

export const TopicType = {
    index: "index"
}

export const DataTypeMappings: DataServiceTypeMapping = {
    "topics": Topic,
    "topics/": TopicContent
};