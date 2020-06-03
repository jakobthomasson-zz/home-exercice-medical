import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { color, zIndex } from "variables";
type Props = { show: boolean };

const Overlay: FunctionComponent<Props> = ({ children, show }) => {
  return <Wrapper aria-hidden={!show}> {children} </Wrapper>;
};

export default Overlay;

const Wrapper = styled.div`
  opacity: 0;
  transition: opacity 0.4s;
  &[aria-hidden="true"] {
    opacity: 0;
  }
  &[aria-hidden="false"] {
    opacity: 1;
  }
  position: fixed;
  z-index: ${zIndex.OVERLAY};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.SHADOW};
`;
