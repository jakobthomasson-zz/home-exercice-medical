import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { spacing } from "variables";
type Props = {};

const Column: FunctionComponent<Props> = (props) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

export default Column;

const Wrapper = styled.div`
  overflow: hidden;
  padding: 0 ${spacing.MEDIUM}px;
`;
