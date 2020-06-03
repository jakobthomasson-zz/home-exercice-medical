import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { color, zIndex } from "variables";
import Icon from "components/ui/Icon";
import Overlay from "components/ui/Overlay";
import { useDebounce } from "hooks";

type Props = { isLoading: boolean };

const LoaderComponent: FunctionComponent<Props> = (props) => {
  const { isLoading } = props;
  const debouncedInitilizing = useDebounce(isLoading, 100);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(isLoading);
  }, [isLoading]);
  if (!debouncedInitilizing) return null;
  return (
    <Overlay show={show}>
      <Wrapper>
        <Icon type="loading" size="large" />
      </Wrapper>
    </Overlay>
  );
};

export default LoaderComponent;

const Wrapper = styled.div`
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
