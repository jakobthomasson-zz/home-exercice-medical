import { color } from "variables";
import { css } from "@emotion/core";
const SMALL = 24;
const MEDIUM = 32;
const LARGE = 64;

const baseCss = css`
  display: inline-flex;
  fill: ${color.BLACK};
  stroke: ${color.BLACK};
`;

const smallIconCss = css`
  height: ${SMALL}px;
`;
const mediumIconCss = css`
  height: ${MEDIUM}px;
`;
const largeIconCss = css`
  height: ${LARGE}px;
`;

function getSizeCss(iconSize: Styles.BaseSize) {
  switch (iconSize) {
    case "small":
      return smallIconCss;
    case "medium":
      return mediumIconCss;
    case "large":
      return largeIconCss;
  }
}

function getStyle(size: Styles.BaseSize) {
  const buttonCss = css`
    ${baseCss}

    > svg {
      ${getSizeCss(size)}
    }
  `;
  return buttonCss;
}

export default getStyle;
