import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Types from "Types";
import styled from "@emotion/styled";
import { testResultSelectors } from "store/testResult";
import Text from "components/ui/Text";
// import {actions, selectors} from 'store/...';

const mapStateToProps = (
  state: Types.RootState,
  { testResultId }: OwnProps
) => ({
  testResult: testResultSelectors.item(state, { testResultId }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = { testResultId: string };

type Props = StateProps & DispatchProps & OwnProps;

const TestResultRow: FunctionComponent<Props> = (props) => {
  const { testResult } = props;
  return <Wrapper>{testResult.barcode}</Wrapper>;
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResultRow);

const Wrapper = styled.div``;
