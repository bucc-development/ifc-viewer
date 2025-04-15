import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { CompleteQTO } from "./CompleteQTO";

export interface CompleteQTOUIState {
  components: OBC.Components;
}

export const completeQTOPanel = (state: CompleteQTOUIState) => {
  const { components } = state;
  const completeQto = components.get(CompleteQTO);

  // Create a standalone panel component
  const panel = BUI.Component.create<BUI.PanelSection>(() => {
    // This function will re-run whenever the component updates
    const categories = completeQto.categories; // Get latest categories

    const onCategoryClick = (category: string) => {
      console.log(`Category selected: ${category}`);
      // Add your category click logic here
    };

    return BUI.html`
      <bim-panel-section
      name="categories"
      label="Pick a category to obtain quantities"
      icon="clarity:calculator-solid"
      fixed
      >
      ${
        categories.length > 0
          ? categories.map(
              (category) =>
                BUI.html`
                  <bim-button 
                  label="${category}"
                    @click=${() => onCategoryClick(category)}
                    ></bim-button>
                    `,
            )
          : BUI.html`<div>No categories found</div>`
      }
      </bim-panel-section>
      `;
  });

  // Set up event listener to update panel when categories change
  completeQto.onCategoriesChanged.add(() => {
    panel.requestUpdate();
  });

  return panel;
};
