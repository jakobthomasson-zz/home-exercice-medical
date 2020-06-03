import React, { FunctionComponent, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { color, spacing, shadow } from "variables";
import getTextStyle from "components/ui/Text/styled";
import Icon from "components/ui/Icon";

type Props = { onSearch(search: string): void; placeholder: string };

const Search: FunctionComponent<Props> = (props) => {
  const { onSearch, placeholder } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <Wrapper>
      <input
        onChange={(e) => onSearch(e.currentTarget.value)}
        placeholder={placeholder}
        ref={inputRef}
      />
      <Icon type="search" size="small" />
    </Wrapper>
  );
};

export default Search;

const inputTextStyle = getTextStyle("heading", "medium");

const Wrapper = styled.div`
  background-color: ${color.WHITE};
  height: ${spacing.VERY_LARGE + spacing.LARGE}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${spacing.VERY_SMALL}px;
  border: ${spacing.TINY}px solid ${color.DARK};
  box-shadow: ${shadow.search};
  padding: 0 ${spacing.MEDIUM}px;
  > .icon {
    fill: ${color.DARK};
  }

  > input {
    text-transform: lowercase;
    background-image: none;
    padding-right: ${spacing.MEDIUM}px;
    ${inputTextStyle};
    color: ${color.BLACK};

    ::placeholder {
      color: ${color.DARK};
    }
  }
`;
