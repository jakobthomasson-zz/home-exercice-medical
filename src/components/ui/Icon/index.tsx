import React, { FunctionComponent, useMemo, useCallback } from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/core";
import SvgComponent from "./svg";
import getStyle from "./styled";

const Wrapper = styled.span<{ css: SerializedStyles }>`
  ${({ css }) => css}
`;

type OwnProps = {
  type: Styles.IconType;
  size: Styles.BaseSize;
};

type ElementProps = Pick<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
  "onClick"
>;
type Props = OwnProps & ElementProps;
const IconComponent: FunctionComponent<Props> = (props) => {
  const { size, type, ...restProps } = props;
  const css = useMemo(() => getStyle(size), [size]);
  return (
    <Wrapper className="icon" css={css} {...restProps}>
      <SvgComponent icon={type} />
    </Wrapper>
  );
};

export default IconComponent;
