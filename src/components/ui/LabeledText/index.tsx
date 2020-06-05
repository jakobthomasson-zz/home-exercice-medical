import React, { FunctionComponent } from "react";
import { color, spacing } from "variables";
import styled from "@emotion/styled";
import Text from "components/ui/Text";

type Props = { label: string; text: string };

const LabeledText: FunctionComponent<Props> = (props) => {
  const { label, text } = props;
  return (
    <Wrapper>
      <Text text={`${label}:`} size="small" />
      <Text text={text} size="medium" />
    </Wrapper>
  );
};

export default LabeledText;

const Wrapper = styled.div`
  height: ${spacing.VERY_LARGE + spacing.LARGE}px;
  display: flex;
  align-items: center;
  .text {
    &:first-of-type {
      text-transform: uppercase;
      color: ${color.DARK};
      width: ${spacing.HUGE * 2}px;
    }
    &:not(:first-of-type) {
      padding: 0 ${spacing.MEDIUM}px;
      flex-grow: 1;
      border-bottom: ${spacing.VERY_SMALL}px dotted ${color.DARK};
      line-height: ${spacing.VERY_LARGE}px;
    }
  }
`;
