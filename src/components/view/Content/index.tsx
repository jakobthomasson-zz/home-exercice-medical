import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Types from "Types";
import styled from "@emotion/styled";
import { color, spacing, zIndex } from "variables";
import { appSelectors } from "store/app";
import Text from "components/ui/Text";

import LabeledText from "components/feature/LabeledText";
import TestResultRow from "./TestResultRow";

const mapStateToProps = (state: Types.RootState) => ({
  selectedPatient: appSelectors.selectedPatient(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type Props = StateProps & DispatchProps;

const Content: FunctionComponent<Props> = (props) => {
  const { children, selectedPatient } = props;
  return (
    <Wrapper>
      <div className="patient">
        {selectedPatient && (
          <>
            <LabeledText
              label="patient no"
              text={selectedPatient.id}
              size="medium"
            />
            <LabeledText
              label="birthdate"
              text={new Date(selectedPatient.dobTimestamp).toDateString()}
              size="medium"
            />
            <LabeledText
              label="name"
              text={selectedPatient.name}
              size="large"
            />
            <LabeledText
              label="gender"
              text={selectedPatient.gender === "M" ? "Male" : "Female"}
              size="medium"
            />
          </>
        )}
      </div>

      <div className="test-result">
        {selectedPatient && (
          <ul className="test-results">
            {selectedPatient.testIds.map((testId) => (
              <li key={testId}>
                <TestResultRow testResultId={testId} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

const Wrapper = styled.div`
  flex-grow: 1;
  > div.patient {
    column-count: 2;
    column-gap: ${spacing.VERY_LARGE}px;
    column-fill: auto;
    height: ${spacing.HUGE * 2}px;
    padding: ${spacing.LARGE}px;
    width: 100%;
    background-color: ${color.LIGHT};
    border-bottom: ${spacing.TINY}px solid ${color.BLACK};
  }
`;
