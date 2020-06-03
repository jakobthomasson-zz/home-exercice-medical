import React, { FunctionComponent } from "react";

// ICONS
import LoadingIcon from "./Loading";
import SearchIcon from "./Search";

type Props = {
  icon: Styles.IconType;
};

const SvgComponent: FunctionComponent<Props> = (props) => {
  const { icon } = props;
  switch (icon) {
    case "loading":
      return <LoadingIcon />;
    case "search":
      return <SearchIcon />;
    default:
      return null;
  }
};

export default SvgComponent;
