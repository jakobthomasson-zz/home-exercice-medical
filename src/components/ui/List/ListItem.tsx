import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { color, spacing } from "variables";

type Props = {
  active?: boolean;
  onClick?(): void;
  header?: boolean;
  filler?: boolean;
};
const ListItem: FunctionComponent<Props> = (props) => {
  const {
    children,
    active = false,
    header = false,
    filler = false,
    onClick,
  } = props;
  return (
    <Wrapper
      className="list-item"
      aria-expanded={!header && active}
      onClick={onClick}
      header={header}
      hoverable={!filler}
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

const specificCss = ({
  header,
  hoverable,
}: {
  header: boolean;
  hoverable: boolean;
}) => {
  return css`
    ${header ? headerCss : rowCss}
    ${hoverable && !header && hoverCss}
  `;
};

const Wrapper = styled.li<{ header: boolean; hoverable: boolean }>`
  height: ${spacing.VERY_LARGE}px;
  display: flex;
  align-items: center;
  padding: 0 ${spacing.LARGE}px;
  ${specificCss}
`;
