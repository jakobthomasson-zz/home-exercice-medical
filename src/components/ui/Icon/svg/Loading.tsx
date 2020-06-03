import React, { FunctionComponent, SVGProps } from "react";

const Loading: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 612 612">
    <path d="M286.875 535.5h38.25v-38.25h-38.25v38.25zM306 76.5c-10.557 0-19.125 8.568-19.125 19.125v191.709h-153c-10.557 0-19.125 8.568-19.125 19.125s8.568 19.125 19.125 19.125H306c10.557 0 19.125-8.568 19.125-19.125V95.625c0-10.557-8.568-19.125-19.125-19.125zM128.769 436.662l26.469 26.526 26.469-26.526-26.469-26.526-26.469 26.526zm56.609-277.485l-27.062-27.042-27.043 27.042 27.043 27.043 27.062-27.043zm236.825-.956l26.47 26.526 26.469-26.526-26.469-26.526-26.47 26.526zM416.6 435.629l27.043 27.043 27.043-27.043-27.043-27.042-27.043 27.042zm80.65-148.754v38.25h38.25v-38.25h-38.25zM306 0C136.992 0 0 137.012 0 306c0 169.008 136.992 306 306 306s306-137.012 306-306S475.008 0 306 0zm0 573.75C158.125 573.75 38.25 453.875 38.25 306S158.125 38.25 306 38.25 573.75 158.125 573.75 306 453.875 573.75 306 573.75z" />
  </svg>
);

export default Loading;
