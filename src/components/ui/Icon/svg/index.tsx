import React, { FunctionComponent } from "react";

// ICONS
import LoadingIcon from "./Loading";

type Props = {
  icon: Styles.IconType;
};

const SvgComponent: FunctionComponent<Props> = (props) => {
  const { icon } = props;
  switch (icon) {
    case "loading":
      return <LoadingIcon />;
    default:
      return null;
  }
};

export default SvgComponent;
