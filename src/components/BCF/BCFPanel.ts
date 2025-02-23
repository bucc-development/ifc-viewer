/* eslint-disable prettier/prettier */
// src/components/BCF/BCFPanel.ts
import * as BUI from "@thatopen/ui";
import * as CUI from "@thatopen/ui-obc";
import * as OBC from "@thatopen/components";
import { users } from "../../types/bcf";

export function createBCFPanel(components: OBC.Components, topicsModal: HTMLDialogElement) {
    const [topicsList, updateTopicsList] = CUI.tables.topicsList({
        components,
        dataStyles: { users }
    });

    if (topicsList) {
        topicsList.selectableRows = true;
    }

    const topics = components.get(OBC.BCFTopics);

    const bcfPanel = BUI.Component.create(() => {
        const onTextInput = (e: Event) => {
        const input = e.target as BUI.TextInput;
        if (topicsList) {
            topicsList.queryString = input.value;
        }
        };

        const showForm = () => {
        topicsModal.showModal();
        };

        const downloadBCF = async () => {
        if (!topicsList) return;

        const selectedTopics = [...topicsList.selection]
            .map(({ Guid }) => {
            if (!(Guid && typeof Guid === "string")) return null;
            return topics.list.get(Guid);
            })
            .filter((topic): topic is OBC.Topic => topic !== null);

        const topicsToExport =
            selectedTopics.length > 0 ? selectedTopics : [...topics.list.values()];

        if (topicsToExport.length === 0) return;

        const bcfData = await topics.export(topicsToExport);
        const bcfFile = new File([bcfData], "topics.bcf");

        const a = document.createElement("a");
        a.href = URL.createObjectURL(bcfFile);
        a.download = bcfFile.name;
        a.click();
        URL.revokeObjectURL(a.href);
        };

        return BUI.html`
        <bim-panel>
            <bim-panel-section label="BCF" fixed>
            <div style="display: flex; justify-content: space-between; gap: 0.5rem">
                <bim-text-input 
                style="flex-grow: 0; flex-basis: 15rem" 
                @input=${onTextInput} 
                placeholder="Search a topic..." 
                debounce="100">
                </bim-text-input>
                <div style="display: flex; gap: 0.5rem">
                <bim-button 
                    style="flex: 0" 
                    @click=${showForm} 
                    label="Create Topic" 
                    icon="material-symbols:task">
                </bim-button>
                <bim-button 
                    style="flex: 0" 
                    @click=${downloadBCF} 
                    label="Download BCF" 
                    icon="material-symbols:download">
                </bim-button>
                </div> 
            </div> 
            ${topicsList}
            </bim-panel-section>
        </bim-panel>
        `;
    });

    return { bcfPanel, topicsList, updateTopicsList };
}
