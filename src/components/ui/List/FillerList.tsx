import React, { FunctionComponent, useMemo } from "react";
import styled from "@emotion/styled";
import List from "./List";
import ListItem from "./ListItem";
import * as R from "remeda";
import { zIndex } from "variables";

type Props = {
  numberOfItems: number;
  size?: Styles.BaseSize;
  header?: boolean;
};

const FillerList: FunctionComponent<Props> = (props) => {
  const { numberOfItems, size = "medium", header = false } = props;

  const fillers = useMemo(() => {
    return R.times(numberOfItems, (n) => (
      <ListItem key={n} filler={true} size={size} />
    ));
  }, [numberOfItems, size]);
  return (
    <EmptyList>
      {header && (
        <ListItem key="header" filler={true} size={size} header={header} />
      )}
      {fillers}
    </EmptyList>
  );
};

export default FillerList;

const EmptyList = styled(List)`
  position: absolute;
  top: 0;
  z-index: ${zIndex.BACK_CONTENT};
  max-height: 100%;
  overflow: hidden;
  height: 100%;
`;
