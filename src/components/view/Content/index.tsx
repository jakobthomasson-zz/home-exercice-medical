import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Types from "Types";
import styled from "@emotion/styled";
// import {actions, selectors} from 'store/...';

const mapStateToProps = (state: Types.RootState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

const Content: FunctionComponent<Props> = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <div className="patient"></div>
      <ul className="test-results"></ul>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

const Wrapper = styled.div``;
