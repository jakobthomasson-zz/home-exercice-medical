import React, { FunctionComponent, useState, useEffect } from "react";
import { connect } from "react-redux";
import Types from "Types";
import { statusSelectors } from "store/status";

import styled from "@emotion/styled";
import Overlay from "components/ui/Overlay";
import Loader from "components/ui/Loader";
import { color, spacing, zIndex } from "variables";
import { useDebounce } from "hooks";
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
      <View />
    </SiteWrapper>
  );
};

export default connect(mapStateToProps)(App);
const View = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${color.WHITE};
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
