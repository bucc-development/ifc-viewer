import * as BUI from "@thatopen/ui";
import * as CUI from "@thatopen/ui-obc";
import * as OBC from "@thatopen/components";
import { appIcons, tooltips } from "../../globals";
import { customPanelTemplate } from "../../ui-templates/panels/custom-panel";
import styles from "./loaded-models.module.scss";

export interface LoadedModelsState {
    components: OBC.Components;
}

export const loadedModelsTemplate: BUI.StatefullComponent<LoadedModelsState> = (
    state
) => {
    const { components } = state;

    const ifcLoader = components.get(OBC.IfcLoader);
    const fragments = components.get(OBC.FragmentsManager);

    const [modelsList] = CUI.tables.modelsList({
        components,
        actions: { download: false },
    });

    const onAddIfcModel = async ({
        target,
    }: {
        target: BUI.Button;
    }): Promise<void> => {
        const input = document.createElement("input");
        input.type = "file";
        input.multiple = false;
        input.accept = ".ifc";

        input.addEventListener("change", async () => {
            const file = input.files?.[0];
            if (!file) return;
            target.loading = true;
            const buffer = await file.arrayBuffer();
            const bytes = new Uint8Array(buffer);
            await ifcLoader.load(bytes, true, file.name.replace(".ifc", ""));
            target.loading = false;
            BUI.ContextMenu.removeMenus();
        });

        input.addEventListener("cancel", () => (target.loading = false));

        input.click();
    };

    const onAddFragmentsModel = async ({
        target,
    }: {
        target: BUI.Button;
    }): Promise<void> => {
        const input = document.createElement("input");
        input.type = "file";
        input.multiple = false;
        input.accept = ".frag";

        input.addEventListener("change", async () => {
            const file = input.files?.[0];
            if (!file) return;
            target.loading = true;
            const buffer = await file.arrayBuffer();
            const bytes = new Uint8Array(buffer);
            await fragments.core.load(bytes, {
                modelId: file.name.replace(".frag", ""),
            });
            target.loading = false;
            BUI.ContextMenu.removeMenus();
        });

        input.addEventListener("cancel", () => (target.loading = false));

        input.click();
    };

    const content = BUI.html`
        <div class="${styles['models-list']}">
            <bim-button
                class="${styles['basil-button']}"
                label="Open Local File"
                tooltip-text="${tooltips.OPEN_LOCAL.TEXT}"
            >
                <bim-context-menu style="gap: 0.25rem;">
                    <bim-button label="IFC" @click=${onAddIfcModel}></bim-button>
                    <bim-button label="Fragments" @click=${onAddFragmentsModel}></bim-button>
                </bim-context-menu>
            </bim-button>
        ${modelsList}
        </div>
    `;

    return customPanelTemplate({
        components,
        icon: appIcons.MODEL,
        title: "Open Models",
        content,
    });
};
