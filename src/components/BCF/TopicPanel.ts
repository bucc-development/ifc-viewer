/* eslint-disable prettier/prettier */
// src/components/BCF/TopicPanel.ts
import * as BUI from "@thatopen/ui";
import * as CUI from "@thatopen/ui-obc";
import * as OBC from "@thatopen/components";
import { users } from "../../types/bcf";

export function createTopicPanel(components: OBC.Components, world: OBC.World) {
    const currentTopic: { value?: OBC.Topic } = { value: undefined };

    const topicPanel = BUI.Component.create<HTMLElement>(() => {
        const [topicDataElement] = CUI.panels.topicData({
            components,
            topic: currentTopic.value,
            styles: { users }
        });

        return BUI.html`
            <bim-panel>
                ${topicDataElement}
            </bim-panel>
        `;
    });

    const updateTopicPanel = (topic: OBC.Topic | undefined) => {
        currentTopic.value = topic;
        const panel = topicPanel.querySelector('bim-panel');
        if (panel) {
            const [topicDataElement] = CUI.panels.topicData({
                components,
                topic,
                styles: { users }
            });
            panel.replaceChildren(topicDataElement);
        }
    };

    return { 
        topicPanel, 
        updateTopicPanel
    };
}