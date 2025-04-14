import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { CompleteQTO } from "./CompleteQTO";

export interface CompleteQTOUIState {
  components: OBC.Components;
}

export const completeQTOPanel = async (state: CompleteQTOUIState) => {
  const { components } = state;
  const completeQto = components.get(CompleteQTO);
  const categories = completeQto.categories;

  return BUI.Component.create<BUI.PanelSection>(() => {
    const onCategoryClick = (category: string) => {
      console.log(`Category selected: ${category}`);
      // Add your logic here for what happens when a category is clicked
    };

    const categoryButtons = categories.map(
      (category) =>
        BUI.html`
        <bim-button 
          label="${category}"
          @click=${() => onCategoryClick(category)}
        ></bim-button>
      `,
    );

    return BUI.html`
      <bim-panel-section
        name="categories"
        label="Pick a category to obtain quantities"
        icon="clarity:calculator-solid"
        fixed
      >
        ${
          categories.length > 0
            ? categoryButtons
            : BUI.html`<div>No categories found</div>`
        }
      </bim-panel-section>
    `;
  });
};
