import React, { FunctionComponent, useMemo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { color, spacing } from "variables";

type Props = {
  active?: boolean;
  onClick?(): void;
  header?: boolean;
  filler?: boolean;
  size?: Styles.BaseSize;
};
const ListItem: FunctionComponent<Props> = (props) => {
  const {
    children,
    active = false,
    header = false,
    filler = false,
    size = "medium",
    onClick,
  } = props;
  const rowHeight = useMemo(() => {
    switch (size) {
      case "small":
        return spacing.VERY_LARGE;
      case "medium":
        return spacing.VERY_LARGE + spacing.LARGE;
      case "large":
        return spacing.HUGE;
    }
  }, [size]);
  return (
    <Wrapper
      className="list-item"
      aria-expanded={!header && active}
      onClick={onClick}
      header={header}
      hoverable={!filler}
      height={rowHeight}
    >
      {children}
    </Wrapper>
  );
};

export default ListItem;

const headerCss = css`
  background-color: ${color.BLACK};
  .text,
  .icon {
    color: ${color.WHITE};
  }
`;

const rowCss = css`
  background-color: ${color.WHITE};

  :nth-of-type(2n-1) {
    background-color: ${color.LIGHT};
  }
`;

const hoverCss = css`
  &:hover,
  &[aria-expanded="true"] {
    background-color: ${color.SHADOW};
  }
`;
const heightCss = (height: number) => css`
  height: ${height}px;
`;
const specificCss = ({
  header,
  hoverable,
  height,
}: {
  header: boolean;
  hoverable: boolean;
  height: number;
}) => {
  return css`
    ${header ? headerCss : rowCss}
    ${hoverable && !header && hoverCss}
    ${heightCss(height)}
  `;
};

const Wrapper = styled.li<{
  header: boolean;
  hoverable: boolean;
  height: number;
}>`
  padding: 0 ${spacing.LARGE}px;

  display: flex;
  align-items: center;
  ${specificCss}
`;
