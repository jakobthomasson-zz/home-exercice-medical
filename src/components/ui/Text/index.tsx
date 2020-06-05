import React, { FunctionComponent, useMemo } from "react";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/core";

import getStyle from "./styled";

const Span = styled.span<{ css: SerializedStyles }>`
  ${({ css }) => css}
`;

type OwnProps = {
  text: string;
  type?: Styles.TextType;
  size?: Styles.BaseSize;
  variation?: Styles.TextVariation;
};

type ElementProps = Pick<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
  "ref"
>;
type Props = OwnProps & ElementProps;

const TextComponent: FunctionComponent<Props> = ({
  text,
  size = "medium",
  type = "standard",
  variation,
  ...restProps
}) => {
  const styles = useMemo(() => getStyle(type, size, variation), [
    size,
    type,
    variation,
  ]);
  return (
    <Span className="text" css={styles} {...restProps}>
      {text}
    </Span>
  );
};

export default TextComponent;
