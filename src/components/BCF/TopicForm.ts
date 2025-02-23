/* eslint-disable prettier/prettier */
// src/components/BCF/TopicForm.ts
import * as BUI from "@thatopen/ui";
import * as CUI from "@thatopen/ui-obc";
import * as OBC from "@thatopen/components";
import { users } from "../../types/bcf";

export function createTopicForm(components: OBC.Components) {
    const [topicForm, updateTopicForm] = CUI.forms.createTopic({
        components,
        styles: { users },
    });

    const topicsModal = BUI.Component.create<HTMLDialogElement>(() => {
        return BUI.html`
        <dialog class="form-dialog">
            <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
                ${topicForm}
            </bim-panel> 
        </dialog>
        `;
    });

    document.body.append(topicsModal);

    updateTopicForm({
        onCancel: () => {
            topicsModal.close();
        },
        onSubmit: () => {
            topicsModal.close();
        },
    });

    return { topicsModal, topicForm, updateTopicForm };
}