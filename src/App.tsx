import React, { FunctionComponent, useState, useEffect } from "react";
import { connect } from "react-redux";
import Types from "Types";
import { statusSelectors } from "store/status";

import styled from "@emotion/styled";
import Overlay from "components/ui/Overlay";
import Loader from "components/ui/Loader";
import { color, spacing, zIndex } from "variables";
import { useDebounce } from "hooks";
import Text from "components/ui/Text";
const mapStateToProps = (state: Types.RootState) => ({
  initilizing: statusSelectors.requestStatus(state, "initilized") === "loading",
});

type StateProps = ReturnType<typeof mapStateToProps>;
type Props = StateProps;

const App: FunctionComponent<Props> = ({ initilizing }) => {
  const debouncedInitilizing = useDebounce(initilizing, 1200);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(initilizing);
  }, [initilizing]);

  return (
    <SiteWrapper>
      {debouncedInitilizing && (
        <Overlay show={isLoading}>
          <Loader />
        </Overlay>
      )}
      <View>
        <Text text="test" type="bread" size="large" />
        <Text text="test" type="bread" size="medium" />
        <Text text="test" type="bread" size="small" />
        <Text text="test" type="heading" size="large" />
        <Text text="test" type="heading" size="medium" />
        <Text text="test" type="heading" size="small" />
      </View>
    </SiteWrapper>
  );
};

export default connect(mapStateToProps)(App);
const View = styled.div`
  width: 1280px;
  height: 960px;
  background-color: ${color.WHITE};
  border: ${spacing.VERY_SMALL}px solid ${color.BLACK};
  border-radius: ${spacing.MEDIUM}px;
`;
const SiteWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.DARK};
  position: absolute;
  overflow: hidden;
  z-index: ${zIndex.BASE};
`;
