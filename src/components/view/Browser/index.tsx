import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Types from "Types";
import styled from "@emotion/styled";
import { color, spacing } from "variables";
import Loader from "components/ui/Loader";
import SearchPatient from "./SearchPatient";
import Patient from "./Patient";
import { appSelectors, appActions } from "store/app";
import { statusSelectors } from "store/status";
import { List, ListItem, FillerList } from "components/ui/List";

const mapStateToProps = (state: Types.RootState) => ({
  resultPatientIds: appSelectors.searchPatientIds(state),
  isSearching: statusSelectors.requestStatus(state, "searching") === "loading",
  selectedPatientId: appSelectors.selectedPatientId(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectPatientId: (patientId: string) =>
    dispatch(appActions.startSelect(patientId)),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

const Browser: FunctionComponent<Props> = (props) => {
  const {
    resultPatientIds,
    isSearching,
    selectedPatientId,
    selectPatientId,
  } = props;
  return (
    <Wrapper>
      <SearchPatient />
      <div className="patients">
        <Loader isLoading={isSearching} />
        <List>
          {resultPatientIds.map((patientId) => (
            <ListItem
              key={patientId}
              active={patientId === selectedPatientId}
              onClick={() => selectPatientId(patientId)}
              size="small"
            >
              <Patient patientId={patientId} />
            </ListItem>
          ))}
        </List>
        <FillerList numberOfItems={50} size="small" />
      </div>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Browser);

const Wrapper = styled.div`
  width: ${spacing.HUGE * 6}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: ${spacing.VERY_SMALL}px solid ${color.BLACK};
  > div.patients {
    width: 100%;
    overflow-y: auto;
    flex-grow: 1;
    position: relative;
  }
`;
