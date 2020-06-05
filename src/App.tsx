import React, { FunctionComponent, useState, useEffect } from "react";
import { connect } from "react-redux";
import Types from "Types";
import { statusSelectors } from "store/status";

import styled from "@emotion/styled";
import { color, zIndex } from "variables";
import Loader from "components/ui/Loader";
import View from "components/view";
const mapStateToProps = (state: Types.RootState) => ({
  initilizing: statusSelectors.requestStatus(state, "initilized") === "loading",
});

type StateProps = ReturnType<typeof mapStateToProps>;
type Props = StateProps;

const App: FunctionComponent<Props> = ({ initilizing }) => {
  return (
    <SiteWrapper>
      <Loader isLoading={initilizing} />
      {!initilizing && <View />}
    </SiteWrapper>
  );
};

export default connect(mapStateToProps)(App);
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
