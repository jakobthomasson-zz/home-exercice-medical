import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import {} from "variables";
import Icon from "components/ui/Icon";

const LoadingIcon: FunctionComponent = () => {
  return (
    <Wrapper>
      <Icon type="loading" size="large" />
    </Wrapper>
  );
};

export default LoadingIcon;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  .icon {
    animation: bouncing 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  @keyframes bouncing {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;
