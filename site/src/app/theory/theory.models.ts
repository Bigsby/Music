import { DataServiceTypeMapping } from "./../_common/common.interfaces";
export class Topic {
    name: string;
    subTopics?: Topic[];
}

export const DataTypeMappings: DataServiceTypeMapping = {
    "topics": Topic
};