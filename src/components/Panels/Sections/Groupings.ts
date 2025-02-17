import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import customSelections from "../../Tables/CustomSelections";

export default (components: OBC.Components) => {
  const [customSelectionsTable, updateCustomSelections] = customSelections({
    components,
  });
  const highlighter = components.get(OBF.Highlighter);

  let newSelectionForm: HTMLDivElement;
  let groupNameDropdown: BUI.Dropdown;
  let saveSelectionBtn: BUI.Button;

  const selectionOptions = [
    { value: 'In Production', label: 'In Production' },
    { value: 'As-built', label: 'As-built' },
    { value: 'In design', label: 'In design' },
  ];

  const onFormCreated = (e?: Element) => {
    if (!e) return;
    newSelectionForm = e as HTMLDivElement;
    highlighter.events.select.onClear.add(() => {
      newSelectionForm.style.display = "none";
    });
  };

  let selectedDropdownValue: string | undefined;

  const onGroupNameDropdownCreated = (e?: Element) => {
    if (!e) return;
    groupNameDropdown = e as BUI.Dropdown;
  
    // Clear existing options
    groupNameDropdown.innerHTML = '';
  
    // Populate dropdown options using `bim-option`
    selectionOptions.forEach(option => {
      const item = document.createElement('bim-option');
      item.value = option.value;  // Set the value attribute
      item.textContent = option.label;  // Set the visible label
  
      // Event listener for selecting the item
      item.addEventListener('click', () => {
        console.log('Item clicked:', option.value); // Log the click event
  
        // Set the dropdown's value to the selected option
        groupNameDropdown.value = [option.value];
        selectedDropdownValue = option.value; // Store the value in a separate variable
        console.log('Dropdown value set to:', groupNameDropdown.value); // Log the value set
      });
  
      groupNameDropdown.appendChild(item);
    });
  
    // Listen for the dropdown's value change event
    groupNameDropdown.addEventListener('change', () => {
      console.log('Dropdown changed, current value:', groupNameDropdown.value); // Log on change
  
      if (groupNameDropdown.value.length === 0 && selectedDropdownValue) {
        console.log("Preventing unexpected reset of the value");
        groupNameDropdown.value = [selectedDropdownValue]; // Restore the value if it's unexpectedly cleared
      }
    });
  };
  

  const onSaveSelectionCreated = (e?: Element) => {
    if (!e) return;
    saveSelectionBtn = e as BUI.Button;
    highlighter.events.select.onHighlight.add(() => {
      saveSelectionBtn.style.display = "block";
    });
    highlighter.events.select.onClear.add(() => {
      saveSelectionBtn.style.display = "none";
    });
  };

  const onSaveGroupSelection = async () => {
    console.log("onSaveGroupSelection triggered");

    if (!selectedDropdownValue) {
      console.log("Dropdown has no value");
      return;
    }
    const selectedValue = selectedDropdownValue;
    console.log("Saving selection:", selectedValue); // Log selected value

    newSelectionForm.style.display = "none";
    saveSelectionBtn.style.display = "none";

    const classifier = components.get(OBC.Classifier);
    if (!(selectedValue in classifier.list)) {
      classifier.list.CustomSelections[selectedValue] = {
        id: null,
        map: highlighter.selection.select,
        name: selectedValue,
      };
    }

    console.log("Updated CustomSelections:", classifier.list.CustomSelections); // Log updated selections

    updateCustomSelections();
    selectedDropdownValue = undefined; // Reset the temporary variable after saving
    groupNameDropdown.value = [];
    groupNameDropdown.label = "Select...";  // Reset dropdown after saving
  };
  
  const onNewSelection = () => {
    console.log("onNewSelection triggered");  // Diagnostic log
    const selectionLength = Object.keys(highlighter.selection.select).length;
    if (!(newSelectionForm && selectionLength !== 0)) return;
    newSelectionForm.style.display = "flex";
  };

  const onCancelGroupCreation = () => {
    if (!newSelectionForm) return;
    newSelectionForm.style.display = "none";
    groupNameDropdown.value = [];
    groupNameDropdown.label = "Select...";  // Reset on cancel
  };

  return BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`
      <bim-panel-section label="Custom Selections" icon="clarity:blocks-group-solid">
        <div ${BUI.ref(onFormCreated)} style="display: none; gap: 0.5rem">
          <bim-dropdown 
            ${BUI.ref(onGroupNameDropdownCreated)} 
            label="Example Label" 
            .multiple=${false}> 
          </bim-dropdown>
          <bim-button @click=${onSaveGroupSelection} icon="mingcute:check-fill" style="flex: 0" label="Accept"></bim-button>
          <bim-button @click=${onCancelGroupCreation} icon="mingcute:close-fill" style="flex: 0" label="Cancel"></bim-button>
        </div>
        ${customSelectionsTable}
        <bim-button style="display: none;" ${BUI.ref(onSaveSelectionCreated)} @click=${onNewSelection} label="Save Selection"></bim-button>
      </bim-panel-section>
    `;
  });
};
