import { css } from "@emotion/core";
import { color, font } from "variables";

const standardType = css`
  color: ${color.BLACK};
  font-family: ${font.fontFamily.standard};
`;
const standardSize: Record<Styles.BaseSize, number> = {
  small: 14,
  medium: 16,
  large: 24,
};
const boldCss = css`
  font-weight: 600;
`;
const italicCss = css`
  font-style: italic;
`;

function getVariationCss(variation: Styles.TextVariation, fontSize: number) {
  const { bold, italic } = variation;
  return css`
    ${bold && boldCss}
    ${italic && italicCss}
  `;
}

function getStyle(
  type: Styles.TextType,
  size: Styles.BaseSize,
  variation?: Styles.TextVariation
) {
  switch (type) {
    case "standard":
      return css`
        ${standardType}
        font-size: ${standardSize[size]}px;
        ${variation && getVariationCss(variation, standardSize[size])}
      `;
  }
}

export default getStyle;
