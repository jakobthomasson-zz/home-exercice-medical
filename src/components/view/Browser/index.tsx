import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Types from "Types";
import styled from "@emotion/styled";
import { color, spacing } from "variables";

import PatientSearch from "./PatientSearch";
// import {actions, selectors} from 'store/...';

const mapStateToProps = (state: Types.RootState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

const Browser: FunctionComponent<Props> = (props) => {
  return (
    <Wrapper>
      <PatientSearch />
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Browser);

const Wrapper = styled.div`
  width: 33%;
  height: 100%;
  border-right: ${spacing.VERY_SMALL}px solid ${color.BLACK};
`;
