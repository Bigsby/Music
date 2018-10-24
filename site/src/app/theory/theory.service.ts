import { Injectable } from "@angular/core";
import { Topic, TopicContent, TopicContentItemType } from "./theory.models";

import { IDataService, ILogger } from "./../_common/common.interfaces";
import { forEach } from "@angular/router/src/utils/collection";

@Injectable()
export class TheoryService {
    constructor(
        private data: IDataService,
        private logger: ILogger
    ) {
        this.logger = this.logger.forContext(TheoryService);
    }

    getTopics(): Promise<Topic[]> {
        return this.data.getList(Topic)
            .then(topics => {
                var root: Topic = {
                    id: "root",
                    name: "Root",
                    isRoot: true,
                    index: 0,
                    subTopics: topics
                };
                this.setProperties(root, topics);
                return topics;
            });
    }

    getTopic(id: string): Promise<Topic> {
        return this.getTopics()
            .then(response => this.findTopic(id, response));
    }

    getContent(topic: Topic): Promise<TopicContent> {
        return this.data.getSingle(TopicContent, topic.id)
            .then(content => {
                return content;
            })
            .catch(error => {
                this.logger.error("Cannot find content for " + topic.id + ": " + error);
                return {
                    items: [{
                        type: TopicContentItemType.text,
                        content: "No Content yet..."
                    }]
                };
            });
    }

    getPrevious(topic: Topic): Topic {
        if (!topic) {
            return null;
        }

        if (topic.parent && topic.index > 0) {
            return topic.parent.subTopics[topic.index - 1];
        }

        return topic.parent.isRoot ? null : topic.parent;
    }

    getNext(topic: Topic): Topic {
        if (!topic) {
            return null;
        }

        if (topic.subTopics && topic.subTopics.length) {
            return topic.subTopics[0];
        }

        let current = topic;

        while (current) {
            let found = this.getNextSibling(current);

            if (found) {
                return found;
            }

            current = current.parent;
        }

        return null;
    }

    private getNextSibling(topic: Topic) {
        if (!topic) {
            return null;
        }

        if (topic.parent && topic.parent.subTopics && topic.parent.subTopics.length - 1 > topic.index) {
            return topic.parent.subTopics[topic.index + 1];
        }

        return null;
    }

    private findTopic(id: string, topics: Topic[]): Topic {

        if (!topics) {
            return null;
        }

        var topic = topics.find(t => t.id == id);
        if (topic)
            return topic;

        for (let topicIndex = 0; topicIndex < topics.length; topicIndex++) {
            const innerTopic = topics[topicIndex];
            let foundTopic = this.findTopic(id, innerTopic.subTopics);

            if (foundTopic) {
                return foundTopic;
            }
        }

        return null;
    }

    private setProperties(parent: Topic, topics: Topic[]) {
        if (topics) {
            topics.forEach((topic, index) => {
                topic.id = (parent.isRoot ? "" : parent.id + ".") + topic.id;
                topic.index = index;
                topic.parent = parent;
                this.setProperties(topic, topic.subTopics);
            });
        }
    }
}
