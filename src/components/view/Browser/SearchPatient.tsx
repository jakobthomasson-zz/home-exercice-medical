import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Search from "components/feature/Search";
import { color, spacing } from "variables";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { appActions } from "store/app";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onPatientSearch: (search: string) => dispatch(appActions.startSearch(search)),
});

type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = DispatchProps;
const SearchPatient: FunctionComponent<Props> = (props) => {
  const { onPatientSearch } = props;
  return (
    <Wrapper>
      <Search onSearch={onPatientSearch} placeholder="search for patient..." />
    </Wrapper>
  );
};

export default connect(null, mapDispatchToProps)(SearchPatient);

const Wrapper = styled.div`
  background-color: ${color.DARK};
  border-bottom: ${spacing.TINY}px solid ${color.BLACK};
  border-top-left-radius: ${spacing.MEDIUM}px;
  padding: ${spacing.LARGE}px;
`;
