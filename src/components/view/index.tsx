import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Browser from "./Browser";
import Content from "./Content";
import { color, spacing } from "variables";

type Props = {};

const View: FunctionComponent<Props> = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <Browser />
      <Content />
    </Wrapper>
  );
};

export default View;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1280px;
  height: 960px;
  background-color: ${color.WHITE};
  border: ${spacing.VERY_SMALL}px solid ${color.BLACK};
  border-radius: ${spacing.MEDIUM}px;
`;
