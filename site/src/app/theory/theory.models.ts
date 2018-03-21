import { DataServiceTypeMapping } from "./../_common/common.interfaces";

export class Topic {
    id: string;
    name: string;
    subTopics?: Topic[];
}

export class TopicContent {
    title: string;
    items: TopicContentItem[];
}

export class TopicContentItem {
    type: TopciContentItemType;
    content: any;
}

export enum TopciContentItemType {
    text,
    youTube,
    didYouKnow,
    resource
}

export const DataTypeMappings: DataServiceTypeMapping = {
    "topics": Topic,
    "topics/": TopicContent
};