import { css, SerializedStyles } from "@emotion/core";
import { color, font } from "variables";

const titleType = css`
  color: ${color.BLACK};
  font-family: ${font.fontFamily.heading};
`;
const titleSize: Record<Styles.BaseSize, number> = {
  small: 18,
  medium: 22,
  large: 32,
};

const breadType = css`
  color: ${color.BLACK};
  font-family: ${font.fontFamily.standard};
`;
const breadSize: Record<Styles.BaseSize, number> = {
  small: 12,
  medium: 16,
  large: 22,
};
const boldCss = css`
  font-weight: 500;
`;
const italicCss = css`
  font-style: italic;
`;
const ruleCss = (fontSize: number) => css`
  font-variant: small-caps;
`;

function getVariationCss(variation: Styles.TextVariation, fontSize: number) {
  const { bold, italic, rule } = variation;
  return css`
    ${bold && boldCss}
    ${italic && italicCss}
    ${rule && ruleCss(fontSize)}
  `;
}

function getStyle(
  type: Styles.TextType,
  size: Styles.BaseSize,
  variation?: Styles.TextVariation
) {
  switch (type) {
    case "heading":
      return css`
        ${titleType}
        font-size: ${titleSize[size]}px;
      `;
    case "bread":
      return css`
        ${breadType}
        font-size: ${breadSize[size]}px;
        ${variation && getVariationCss(variation, breadSize[size])}
      `;
  }
}

export default getStyle;
