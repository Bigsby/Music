import { DataServiceTypeMapping } from "./../_common/common.interfaces";
export class Topic {
    name: string;
}

export const DataTypeMappings: DataServiceTypeMapping = {
    "topics": Topic
};