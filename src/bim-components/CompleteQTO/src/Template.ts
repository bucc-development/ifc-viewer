import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { CompleteQTO } from "./CompleteQTO";

export interface CompleteQTOUIState {
  components: OBC.Components;
}

export const completeQTOPanel = async (state: CompleteQTOUIState) => {
  const { components } = state;
  const completeQto = components.get(CompleteQTO);
  const categories = completeQto.getCategories();

  const onCategoryClick = (category: string) => {
    console.log(`Category selected: ${category}`);
    // Add your logic here for what happens when a category is clicked
  };

  const categoryButtons = (await categories).map(
    (category) =>
      BUI.html`
      <bim-button 
        label="${category}"
        @click=${() => onCategoryClick(category)}
      ></bim-button>
    `,
  );

  return BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`
            <bim-panel-section
                name="categories"
                label="Pick a category to obtain quantities"
                icon="clarity:calculator-solid"
                fixed
                >
                ${categoryButtons}
            </bim-panel-section>
    `;
  });
};
