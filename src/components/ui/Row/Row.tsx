import React, { FunctionComponent, useMemo } from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";

type Props = { columns: number[] };

const Row: FunctionComponent<Props> = (props) => {
  const { children, columns } = props;
  const columnsStyle = useMemo(() => {
    const templateColumns = columns.map((column) => `${column}fr`).join(" ");
    return css`
      grid-template-columns: ${templateColumns};
    `;
  }, [columns]);
  console.log(columnsStyle);
  return (
    <Wrapper css={columnsStyle} className="hej">
      {children}
    </Wrapper>
  );
};

export default Row;

const Wrapper = styled.div<{ css: SerializedStyles }>`
  display: grid;
  width: 100%;
  ${({ css }) => css}
`;
