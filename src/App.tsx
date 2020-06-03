import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import Types from "Types";
import { statusSelectors } from "store/status";

const mapStateToProps = (state: Types.RootState) => ({
  isInitilized: statusSelectors.requestStatus(state, "initilized") === "done",
});

type StateProps = ReturnType<typeof mapStateToProps>;
type Props = StateProps;

const App: FunctionComponent<Props> = ({ isInitilized }) => {
  return <div>{isInitilized ? "application ready" : "loading"}</div>;
};

export default connect(mapStateToProps)(App);
