import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
import * as CUI from "@thatopen/ui-obc";

export default (components: OBC.Components) => {
  // const indexer = components.get(OBC.IfcRelationsIndexer);
  // indexer.process(model);

  const tableDefinition: BUI.TableDataTransform = {
    Name: (value) => BUI.html`<bim-label>${value}</bim-label>`,
    NominalValue: (value) => BUI.html`<bim-label>${value}</bim-label>`,
  };

  const [attributesTable, updateAttributesTable] = CUI.tables.entityAttributes({
    components,
    fragmentIdMap: {},
    tableDefinition,
    attributesToInclude: () => {
      const attributes: any[] = [
        "Category",
        "Name",
        "ContainedInStructure",
        "HasProperties",
        "HasPropertySets",
        (name: string) => name.includes("Value"),
        (name: string) => name.startsWith("Material"),
        (name: string) => name.startsWith("Relating"),
        (name: string) => {
          const ignore = ["IsGroupedBy", "IsDecomposedBy"];
          return name.startsWith("Is") && !ignore.includes(name);
        },
      ];
      return attributes;
    },
  });

  attributesTable.expanded = true;
  attributesTable.indentationInText = true;
  attributesTable.preserveStructureOnFilter = true;

  const highlighter = components.get(OBCF.Highlighter);

  highlighter.events.select.onHighlight.add((fragmentIdMap) => {
    updateAttributesTable({ fragmentIdMap });
  });

  highlighter.events.select.onClear.add(() =>
    updateAttributesTable({ fragmentIdMap: {} })
  );

  const search = (e: Event) => {
    const input = e.target as BUI.TextInput;
    attributesTable.queryString = input.value;
  };

  const toggleExpanded = () => {
    attributesTable.expanded = !attributesTable.expanded;
  };

  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
        <bim-panel>
          <bim-panel-section label="Entity Attributes" fixed>
          <div style="display: flex; gap: 0.375rem;">
            <bim-text-input @input=${search} vertical placeholder="Search..." debounce="200"></bim-text-input>
            <bim-button style="flex: 0;" @click=${toggleExpanded} icon="eva:expand-fill"></bim-button>
            <bim-button style="flex: 0;" @click=${() => attributesTable.downloadData("entities-attributes")} icon="ph:export-fill" tooltip-title="Export Data" tooltip-text="Export the shown properties to JSON."></bim-button>
          </div>
            ${attributesTable}
          </bim-panel-section>
        </bim-panel> 
      `;
  });
};
