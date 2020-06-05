import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import Types from "Types";
import styled from "@emotion/styled";
import { color, spacing } from "variables";
import { appSelectors } from "store/app";
import LabeledText from "components/ui/LabeledText";
import TestResultRow from "./TestResultRow";
import Loader from "components/ui/Loader";
import { FillerList, ListItem, List } from "components/ui/List";
import { statusSelectors } from "store/status";
const mapStateToProps = (state: Types.RootState) => ({
  selectedPatient: appSelectors.selectedPatient(state),
  isSelecting:
    statusSelectors.requestStatus(state, "select_patient") === "loading",
});

type StateProps = ReturnType<typeof mapStateToProps>;

type Props = StateProps;

const Content: FunctionComponent<Props> = (props) => {
  const { children, selectedPatient, isSelecting } = props;
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
        <Loader isLoading={isSelecting} />
        <List>
          {selectedPatient &&
            selectedPatient.testIds.map((testId) => (
              <ListItem key={testId} size="large">
                <TestResultRow testResultId={testId} />
              </ListItem>
            ))}
        </List>
        <FillerList numberOfItems={50} size="large" />
      </div>
    </Wrapper>
  );
};

export default connect(mapStateToProps)(Content);

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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

  > div.test-result {
    flex-grow: 1;
    position: relative;
  }
`;
