import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as CUI from "@thatopen/ui-obc";
import * as FRAGS from "@thatopen/fragments";
import BUCC1 from "../../assets/BUCC_1.frag?url";
import BUCC2 from "../../assets/BUCC_2.frag?url";
// import groupings from "./Sections/Groupings";

const modelPaths = {
  "1": BUCC1,
  "2": BUCC2,
};

export default (
  components: OBC.Components,
  world: OBC.SimpleWorld<
    OBC.SimpleScene,
    OBC.OrthoPerspectiveCamera,
    OBC.SimpleRenderer
  >,
  fragments: FRAGS.FragmentsModels,
) => {
  const [modelsList] = CUI.tables.modelsList({ components });
  // const [relationsTree] = CUI.tables.relationsTree({
  //   components,
  //   models: [],
  //   hoverHighlighterName: "hover",
  //   selectHighlighterName: "select",
  // });
  // relationsTree.preserveStructureOnFilter = true;

  // const search = (e: Event) => {
  //   const input = e.target as BUI.TextInput;
  //   relationsTree.queryString = input.value;
  // };

  const loadFragmentFile = async (path: string, id: string) => {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error("Failed to fetch model");
      const buffer = await response.arrayBuffer();
      await fragments.load(buffer, { modelId: id });
    } catch (error) {
      console.error("Error loading fragment:", error);
    }
  };

  const getBinaryData = async (id: string) => {
    const model = fragments.models.list.get(id);
    if (!model) return null;
    const buffer = await model.getBuffer(false);
    return { name: model.modelId, buffer };
  };

  const getModelsIds = () => {
    const models = fragments.models.list.values();
    const ids = [...models].map((model) => model.modelId);
    return ids;
  };

  const disposeModels = async (ids = getModelsIds()) => {
    const promises = [];
    for (const id of ids) promises.push(fragments.disposeModel(id));
    await Promise.all(promises);
  };

  BUI.Manager.init();

  const [panel, updatePanel] = BUI.Component.create<BUI.PanelSection, any>(
    (_) => {
      const ids = getModelsIds();

      const onLoadModel = async ({ target }: { target: BUI.Button }) => {
        const name = target.getAttribute("data-name");
        if (!name) return;
        const id = `BUCC_${name}`;
        target.loading = true;
        if (ids.includes(id)) {
          await disposeModels([id]);
        } else {
          await loadFragmentFile(modelPaths[name], id);
        }
        target.loading = false;
      };

      const onDisposeModels = () => disposeModels();

      const onDownloadModel = async ({ target }: { target: BUI.Button }) => {
        const name = target.getAttribute("data-name");
        if (!name) return;
        const id = `BUCC_${name}`;
        target.loading = true;
        const result = await getBinaryData(id);
        if (result) {
          const { name, buffer } = result;
          const a = document.createElement("a");
          const file = new File([buffer], `${name}.frag`);
          a.href = URL.createObjectURL(file);
          a.download = file.name;
          a.click();
          URL.revokeObjectURL(a.href);
        }
        target.loading = false;
      };

      const bucc1Loaded = ids.some((id) => id.includes("BUCC_1"));
      const bucc2Loaded = ids.some((id) => id.includes("BUCC_2"));

      const bucc1Label = bucc1Loaded ? "Remove BUCC 1" : "Load BUCC 1";
      const bucc2Label = bucc2Loaded ? "Remove BUCC 2" : "Load BUCC 2";

      return BUI.html`
    <bim-panel id="controls-panel" active label="Fragments Models" class="options-menu">
      <bim-panel-section label="Controls">
        <div style="display: flex; gap: 0.25rem">
          <bim-button data-name="1" label=${bucc1Label} @click=${onLoadModel}></bim-button>
          ${bucc1Loaded ? BUI.html`<bim-button data-name="1" label="Download" @click=${onDownloadModel}></bim-button>` : null}
        </div>
        <div style="display: flex; gap: 0.25rem">
          <bim-button data-name="2" label=${bucc2Label} @click=${onLoadModel}></bim-button>
          ${bucc2Loaded ? BUI.html`<bim-button data-name="2" label="Download" @click=${onDownloadModel}></bim-button>` : null}
        </div>
        <bim-button ?disabled=${ids.length === 0} label="Remove All" @click=${onDisposeModels}></bim-button>
      </bim-panel-section>
    </bim-panel>
  `;
    },
    {},
  );

  fragments.models.list.onItemSet.add(() => updatePanel());
  fragments.models.list.onItemDeleted.add(() => updatePanel());

  document.body.append(panel);

  const button = BUI.Component.create<BUI.PanelSection>(() => {
    const onClick = () => {
      if (panel.classList.contains("options-menu-visible")) {
        panel.classList.remove("options-menu-visible");
      } else {
        panel.classList.add("options-menu-visible");
      }
    };

    return BUI.html`
    <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
      @click=${onClick}>
    </bim-button>
  `;
  });

  document.body.append(button);

  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
      <bim-panel>
        <bim-panel-section label="Loaded Models" icon="mage:box-3d-fill">
          ${modelsList}
          ${panel}
        </bim-panel-section>
      </bim-panel> 
      `;
  });
};

// <bim-panel-section label="Spatial Structures" icon="ph:tree-structure-fill">
//   <div style="display: flex; gap: 0.375rem;">
//     <bim-text-input @input=${search} vertical placeholder="Search..." debounce="200"></bim-text-input>
//     <bim-button style="flex: 0;" @click=${() => (relationsTree.expanded = !relationsTree.expanded)} icon="eva:expand-fill"></bim-button>
//   </div>
//   ${relationsTree}
// </bim-panel-section>
// ${groupings(components)}
