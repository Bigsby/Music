import { DataServiceTypeMapping } from "./../_common/common.interfaces";

export class Topic {
    id: string;
    name: string;
    description: string;
    index: number;
    parent?: Topic;
    subTopics?: Topic[];
    path: Topic[];
}

export class TopicContent {
    topic?: Topic;
    title: string;
    items?: TopicContentItem[];
}

export class TopicContentItem {
    type: TopciContentItemType;
    content: any;
}

export enum TopciContentItemType {
    index,
    text,
    youTube,
    didYouKnow,
    resource
}

export const DataTypeMappings: DataServiceTypeMapping = {
    "topics": Topic,
    "topics/": TopicContent
};