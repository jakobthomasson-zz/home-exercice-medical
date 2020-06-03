import React, { FunctionComponent, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Types from "Types";
import styled from "@emotion/styled";
import { color, spacing, zIndex } from "variables";
import Loader from "components/feature/Loader";
import SearchPatient from "./SearchPatient";
import Patient from "./Patient";
import { appSelectors, appActions } from "store/app";
import { statusSelectors } from "store/status";

// import {actions, selectors} from 'store/...';

const mapStateToProps = (state: Types.RootState) => ({
  resultPatientIds: appSelectors.searchPatientIds(state),
  isSearching: statusSelectors.requestStatus(state, "searching") === "loading",
  selectedPatientId: appSelectors.selectedPatientId(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectPatientId: (patientId: string) =>
    dispatch(appActions.setSelectedPatientId(patientId)),
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

        <ul>
          {resultPatientIds.map((patientId) => (
            <li
              key={patientId}
              aria-expanded={patientId === selectedPatientId}
              onClick={() => selectPatientId(patientId)}
            >
              <Patient patientId={patientId} />
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Browser);

const Wrapper = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: ${spacing.VERY_SMALL}px solid ${color.BLACK};
  > div.patients {
    width: 100%;
    flex-grow: 1;
    position: relative;
    > ul {
      height: 100%;
      z-index: ${zIndex.OVERLAY - 1};
      > li {
        height: ${spacing.VERY_LARGE}px;
        display: flex;
        align-items: center;
        padding: 0 ${spacing.LARGE}px;
        background-color: ${color.WHITE};

        :nth-of-type(2n-1) {
          background-color: ${color.LIGHT};
        }
        &:hover,
        &[aria-expanded="true"] {
          background-color: ${color.SHADOW};
        }
      }
    }
  }
`;
