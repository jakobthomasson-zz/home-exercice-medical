import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { color, zIndex } from "variables";
type Props = { show: boolean };

const Overlay: FunctionComponent<Props> = ({ children, show }) => {
  return <Wrapper aria-hidden={!show}> {children} </Wrapper>;
};

export default Overlay;

const Wrapper = styled.div`
  position: absolute;
  z-index: ${zIndex.OVERLAY};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.SHADOW};
  transition: opacity 0.1s;

  &[aria-hidden="true"] {
    opacity: 0;
  }
  &[aria-hidden="false"] {
    opacity: 1;
  }
`;
