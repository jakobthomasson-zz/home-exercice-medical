import React, { FunctionComponent } from "react";

import LoadingIcon from "./Loading";
import SearchIcon from "./Search";
import NeutralFaceIcon from "./NeutralFace";
import SadFaceIcon from "./SadFace";
import HappyFaceIcon from "./HappyFace";

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
    case "happy-face":
      return <HappyFaceIcon />;
    case "neutral-face":
      return <NeutralFaceIcon />;
    case "sad-face":
      return <SadFaceIcon />;
    default:
      return null;
  }
};

export default SvgComponent;
