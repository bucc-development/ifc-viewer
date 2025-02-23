// src/types/bcf.ts
/* eslint-disable prettier/prettier */
import * as OBC from "@thatopen/components";

export interface UserStyle {
    name: string;
    picture: string;
}

export interface TopicStyles {
    users?: Record<string, UserStyle>;
}

export interface TopicActionBase {
    enabled?: boolean;
}

export interface TopicInformationActions extends TopicActionBase {
    edit?: boolean;
}

export interface TopicViewpointActions extends TopicActionBase {
    create?: boolean;
    delete?: boolean;
    select?: boolean;
}

export interface TopicRelationActions extends TopicActionBase {
    create?: boolean;
    delete?: boolean;
}

export interface TopicCommentActions extends TopicActionBase {
    create?: boolean;
    delete?: boolean;
}

export interface TopicPanelActions {
    information?: Partial<TopicInformationActions>;
    viewpoints?: Partial<TopicViewpointActions>;
    relatedTopics?: Partial<TopicRelationActions>;
    comments?: Partial<TopicCommentActions>;
}

export interface TopicPanelUI {
    components: OBC.Components;
    topic?: OBC.Topic;
    styles?: TopicStyles;
    actions?: TopicPanelActions;
    world?: OBC.World;
}

export const users: Record<string, UserStyle> = {
    "john.doe@example.com": {
        name: "John Doe",
        picture: "/assets/default-avatar.jpg",
    },
    "jane.smith@example.com": {
        name: "Jane Smith",
        picture: "/assets/default-avatar.jpg",
    }
};