import React, { FC } from "react";
import { ShowInterface } from "../../showInterface";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  box-sizing: border-box;
`;

const StyledImageColumn = styled.div`
  width: 105px;
  margin-right: 30px;
`;

interface ShowListProps {
  shows: ShowInterface[];
  onOpenShow(id: number): void;
}

const ShowList: FC<ShowListProps> = ({ onOpenShow, shows }) => {
  const handleSeeDetails = (id: number) => () => {
    onOpenShow(id);
  };

  return (
    <div>
      {shows.map(({ show: { id, name, genres, image } }) => (
        <StyledItem key={id}>
          <StyledImageColumn>
            {image && <img alt="show-cover" width="105" src={image.medium} />}
          </StyledImageColumn>
          <div>
            <div>
              <b>Title:</b> {name}
            </div>
            {genres.length ? (
              <div>
                <b>Genre:</b> {genres.join(", ")}
              </div>
            ) : null}
            <div>
              <button onClick={handleSeeDetails(id)}>See details...</button>
            </div>
          </div>
        </StyledItem>
      ))}
    </div>
  );
};

export default ShowList;
