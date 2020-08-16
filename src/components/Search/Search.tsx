import React, { useState, ChangeEvent, KeyboardEvent, FC } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  padding: 30px 50px;
  border-bottom: 1px black solid;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  margin-right: 20px;
`;

interface SearchProps {
  onSearch(searchText: string): void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <StyledWrapper>
      <div>Keyword</div>

      <StyledInput
        onChange={handleSearchTextChange}
        onKeyDown={handleKeyDown}
        type="string"
        id="search"
        name="search"
        value={searchText}
      />

      <button onClick={handleSearch}>Search</button>
    </StyledWrapper>
  );
};

export default Search;
