import * as BUI from "@thatopen/ui";

const logo = `${import.meta.env.BASE_URL}bucc-logo-02.png`;

export const logoTemplate = (): BUI.TemplateResult => {
  return BUI.html`
    <div class="viewport-logo" style="display: flex; align-items: flex-start; gap: 0.5rem;">
      <img src="${logo}" style="height: 7rem;" />
    </div>
  `;
};
