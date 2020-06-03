import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Search from "components/feature/Search";
import { color, spacing, shadow } from "variables";

type Props = {};

const PatientSearch: FunctionComponent<Props> = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <Search onSearch={(val) => console.log(val)} />
    </Wrapper>
  );
};

export default PatientSearch;

const Wrapper = styled.div`
  background-color: ${color.LIGHT};
  border-bottom: ${spacing.TINY}px solid ${color.BLACK};
  border-top-left-radius: ${spacing.MEDIUM}px;
  padding: ${spacing.LARGE}px;
`;
