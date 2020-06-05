import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { spacing } from "variables";

type Props = Partial<Pick<System.HeaderColumn, "align">>;

const Column: FunctionComponent<Props> = (props) => {
  const { children, align = "flex-start" } = props;
  return <Wrapper align={align}>{children}</Wrapper>;
};

export default Column;

const Wrapper = styled.div<{ align: string }>`
  overflow: hidden;
  display: flex;
  justify-content: ${({ align }) => align};
  padding: 0 ${spacing.LARGE}px;
`;
