import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Types from "Types";
import styled from "@emotion/styled";
import Text from "components/ui/Text";
import { patientSelectors } from "store/patient";
const mapStateToProps = (state: Types.RootState, { patientId }: OwnProps) => ({
  patient: patientSelectors.item(state, { patientId }),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = { patientId: string };

type Props = StateProps & DispatchProps & OwnProps;

const Patient: FunctionComponent<Props> = (props) => {
  const { children, patient } = props;
  return (
    <Wrapper>
      <Text text={patient.name} size="medium" />
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Patient);

const Wrapper = styled.div``;
