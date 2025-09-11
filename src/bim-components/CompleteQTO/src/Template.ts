import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { CompleteQTO } from "./CompleteQTO";
import tableData from "../../../assets/ifc_detailed_objects 1.json";

export interface CompleteQTOUIState {
  components: OBC.Components;
}

export const categoriesTable = (state: CompleteQTOUIState) => {
  const { components } = state;
  const completeQto = components.get(CompleteQTO);

  const categories: BUI.TableGroupData[] = [
    { data: { category: "Site" } },
    { data: { category: "Levels" } },
    { data: { category: "Project Information" } },
    { data: { category: "Mechanical Equipment" } },
    { data: { category: "Duct Fittings" } },
    { data: { category: "Duct Accessories" } },
    { data: { category: "Air Terminals" } },
    { data: { category: "Ducts" } },
    { data: { category: "Generic Models" } },
  ];

  const categoriesTable = BUI.Component.create<BUI.Table>(() => {
    return BUI.html`
      <bim-table></bim-table>
    `;
  });

  categoriesTable.data = categories;
  categoriesTable.headersHidden = true;
  categoriesTable.addEventListener("rowcreated", (e) => {
    const { row } = e.detail;
    const rowData = row.data as { category?: string };

    // Hover effect
    row.onmouseover = () => {
      row.style.backgroundColor = "var(--bim-ui_bg-contrast-20)";
      row.style.cursor = "pointer";
    };

    row.onmouseout = () => {
      row.style.backgroundColor = "";
    };

    // Click handler
    row.onclick = () => {
      if (rowData.category) {
        console.log("Category clicked:", rowData.category);
        // Add more click logic here
        completeQto.getCleanElementsJSON(rowData.category);
      }
    };
  });

  // completeQto.categoriesTable = categoriesTable;

  completeQto.onDisposed.add(() => {
    categoriesTable.remove();
  });

  return categoriesTable;
};

export const QTOTable = (state: CompleteQTOUIState) => {
  const { components } = state;
  const completeQto = components.get(CompleteQTO);

  // Define interfaces for your data structure
  interface ElementData {
    class: string;
    name: string;
    globalId: string;
    psets: {
      Pset_ProductRequirements?: {
        Category: string;
      };
      Pset_QuantityTakeOff?: {
        Reference: string;
      };
      ASML?: {
        "Q Gewicht"?: number;
        "3.4 Entiteit"?: string;
        "3.5 Naamgeving element"?: string;
        [key: string]: any;
      };
      [key: string]: any;
    };
  }

  // Define the table row types
  type TableRowData = Record<string, string | number | boolean>;
  type QTORowData = {
    id: string;
    class: string;
    name: string;
    globalId: string;
    category: string;
    entityType?: string;
    elementName?: string;
    reference: string;
    quantity?: number;
    unit?: string;
    floor?: string;
    height?: number;
    manufacturer?: string;
  };

  // Create the table component
  const fullQTOTable = BUI.Component.create<BUI.Table>(() => {
    return BUI.html`
      <bim-table expanded>
        <div slot="missing-data" style="display: flex; flex-direction: column; align-items: center; width: 8rem; margin: auto;">
          <bim-label>No data to display!</bim-label>
        </div>
      </bim-table>
    `;
  });

  // Transform JSON data to table format
  const transformDataToTable = (jsonData: Record<string, ElementData>) => {
    const tableData: BUI.TableGroupData[] = [];

    for (const [id, elementData] of Object.entries(jsonData)) {
      const category =
        elementData.psets?.Pset_ProductRequirements?.Category || "Unknown";
      const reference =
        elementData.psets?.Pset_QuantityTakeOff?.Reference || "";
      const asmlData = elementData.psets?.ASML || {};
      const sparingenData = elementData.psets?.["ASML sparingen"] || {};

      const rowData: QTORowData = {
        id,
        class: elementData.class,
        name: elementData.name,
        globalId: elementData.globalId,
        category,
        entityType: asmlData["3.4 Entiteit"],
        elementName: asmlData["3.5 Naamgeving element"],
        reference,
        quantity: asmlData["Q Gewicht"],
        unit: asmlData["Q Gewicht"] ? "kg" : undefined,
        floor: sparingenData["SP.01 Verdieping"],
        height: sparingenData["SP.13 Sparing hoogte hart  t.o.v. verdieping "],
        manufacturer:
          elementData.psets?.Pset_ManufacturerTypeInformation?.Manufacturer,
      };

      tableData.push({
        data: rowData as unknown as TableRowData,
      });
    }

    return tableData;
  };

  // Set the transformed data to the table
  fullQTOTable.data = transformDataToTable(tableData);

  // Configure columns with custom widths and ordering
  fullQTOTable.columns = [
    { name: "id", width: "80px" },
    { name: "class", width: "120px" },
    { name: "name", width: "200px" },
    { name: "category", width: "150px" },
    { name: "entityType", width: "150px" },
    { name: "elementName", width: "150px" },
    { name: "quantity", width: "80px" },
    { name: "unit", width: "60px" },
    { name: "floor", width: "200px" },
    { name: "height", width: "100px" },
    { name: "manufacturer", width: "150px" },
  ];

  fullQTOTable.hiddenColumns = [
    "entityType",
    "elementName",
    "quantity",
    "unit",
    "floor",
    "height",
    "manufacturer",
    "globalId",
  ];

  // Add data transformations for better display
  fullQTOTable.dataTransform = {
    quantity: (value: unknown) => (value ? `${value}` : "-"),
    height: (value: unknown) => {
      const numValue =
        typeof value === "number" ? value : parseFloat(String(value));
      return Number.isNaN(numValue) ? "-" : `${numValue.toFixed(2)} mm`;
    },
    class: (value: unknown) => {
      const strValue = String(value);
      const colorMap: Record<string, string> = {
        IfcBuildingElementProxy: "#cc0000",
      };
      const color = colorMap[strValue] || "#9E9E9E";
      return BUI.html`
        <bim-label style="color: ${color}">${strValue}</bim-label>
      `;
    },
  };

  // Add search functionality
  const searchBox = BUI.Component.create<BUI.TextInput>(() => {
    const onInput = (e: Event) => {
      const input = e.target;
      if (!(input instanceof BUI.TextInput)) return;
      fullQTOTable.queryString = input.value;
    };

    return BUI.html`
      <bim-text-input 
        @input=${onInput} 
        placeholder="Search..." 
        debounce=250
        style="flex: 1"
      ></bim-text-input>
    `;
  });

  // Add column visibility toggle
  const addColumnVisibilityControls = () => {
    const columnToggleBtn = BUI.Component.create<BUI.Button>(() => {
      return BUI.html`
        <bim-button label="Toggle Columns" style="width: 120px"></bim-button>
      `;
    });

    const columnMenu = BUI.Component.create<BUI.Dropdown>(() => {
      return BUI.html`<bim-dropdown></bim-dropdown>`;
    });

    // Create menu items for each column
    const allColumns = [
      { name: "id", label: "ID" },
      { name: "class", label: "Class" },
      { name: "name", label: "Name" },
      { name: "category", label: "Category" },
      { name: "entityType", label: "Entity Type" },
      { name: "elementName", label: "Element Name" },
      { name: "quantity", label: "Quantity" },
      { name: "unit", label: "Unit" },
      { name: "floor", label: "Floor" },
      { name: "height", label: "Height" },
      { name: "manufacturer", label: "Manufacturer" },
      { name: "globalId", label: "Global ID" },
    ];

    allColumns.forEach((column) => {
      const isHidden = fullQTOTable.hiddenColumns.includes(column.name);
      const menuItem = BUI.Component.create<BUI.Option>(() => {
        const onChange = (e: Event) => {
          const checkbox = e.target as HTMLInputElement;
          if (checkbox.checked) {
            fullQTOTable.hiddenColumns = fullQTOTable.hiddenColumns.filter(
              (col) => col !== column.name,
            );
          } else {
            fullQTOTable.hiddenColumns = [
              ...fullQTOTable.hiddenColumns,
              column.name,
            ];
          }
        };

        return BUI.html`
          <bim-option>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <input type="checkbox" ?checked=${!isHidden} @change=${onChange}>
              ${column.label}
            </div>
          </bim-option>
        `;
      });
      columnMenu.appendChild(menuItem);
    });

    columnToggleBtn.addEventListener("click", () => {
      columnMenu.setAttribute(
        "open",
        columnMenu.hasAttribute("open") ? "" : "true",
      );
    });

    return BUI.html`
      <div style="position: relative;">
        ${columnToggleBtn}
        ${columnMenu}
      </div>
    `;
  };

  // Add export functionality
  const addExportControls = () => {
    const formatDropdown = BUI.Component.create<BUI.Dropdown>(
      () => BUI.html`
      <bim-dropdown required style="width: 120px">
        <bim-option label="CSV" value="csv" checked></bim-option>
        <bim-option label="TSV" value="tsv"></bim-option>
        <bim-option label="JSON" value="json"></bim-option>
      </bim-dropdown>
    `,
    );

    const fileNameInput = BUI.Component.create<BUI.TextInput>(
      () =>
        BUI.html`<bim-text-input value="QTO_Export" style="width: 150px"></bim-text-input>`,
    );

    const downloadBtn = BUI.Component.create<BUI.Button>(() => {
      const onClick = () => {
        const format = formatDropdown.value[0] as "csv" | "tsv" | "json";
        if (!format) return;
        const fileName = fileNameInput.value.trim() || undefined;
        fullQTOTable.downloadData(fileName, format);
      };

      return BUI.html`
        <bim-button 
          @click=${onClick} 
          label="Export" 
          style="width: 100px"
        ></bim-button>
      `;
    });

    return BUI.html`
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        ${fileNameInput}
        ${formatDropdown}
        ${downloadBtn}
      </div>
    `;
  };

  completeQto.fullQTOTable = fullQTOTable;
  completeQto.onDisposed.add(() => fullQTOTable.remove());

  // Return the complete table with controls
  return BUI.Component.create(() => {
    return BUI.html`
      <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
        <div style="display: flex; gap: 0.75rem; align-items: center;">
          ${searchBox}
          ${addColumnVisibilityControls()}
          ${addExportControls()}
        </div>
        ${fullQTOTable}
      </div>
    `;
  });
};
