import React, {
  FunctionComponent,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import styled from "@emotion/styled";
import { color, spacing, shadow } from "variables";
import getTextStyle from "components/ui/Text/styled";
import Icon from "components/ui/Icon";
import { useDebounce } from "hooks";

type Props = { onSearch(search: string): void };

const Search: FunctionComponent<Props> = (props) => {
  const { onSearch } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    onSearch(debouncedSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <Wrapper>
      <input
        onChange={(e) => setSearch(e.currentTarget.value)}
        defaultValue={search}
        placeholder="search for patient..."
        ref={inputRef}
      />
      <Icon type="search" size="small" />
    </Wrapper>
  );
};

export default Search;

const inputTextStyle = getTextStyle("heading", "medium", { rule: true });

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
