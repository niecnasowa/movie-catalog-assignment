import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Show } from "../../showInterface";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  background: white;
  padding: 30px 50px 50px;
  box-sizing: border-box;
  border-bottom: 3px solid black;
`;

const StyledColumns = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  margin-right: 30px;
`;

const StyledButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface ShowDetailsProps {
  id: number;
  onClose(): void;
}

const ShowDetails: FC<ShowDetailsProps> = ({ id, onClose }) => {
  const [show, setShow] = useState<Show | null>(null);

  useEffect(
    () => {
      axios
        .get(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then(({ data }) => {
          const showData = data as Show;
          setShow(showData);
        })
        .catch(console.log);
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  if (!show) {
    return null;
  }

  const {
    name,
    image,
    summary,
    _embedded: { cast }
  } = show;

  return (
    <StyledWrapper>
      <StyledColumns>
        <LeftColumn>
          {image && <img alt="show-cover" src={image.medium} />}
          <div>
            <b>Cast</b>
          </div>
          <div>{cast && cast.map(({ person: { name } }) => name)}</div>
        </LeftColumn>
        <div>
          <div>{name}</div>
          <div>
            <b>Summary</b>
          </div>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </StyledColumns>
      <StyledButtonContainer>
        <button onClick={onClose}>Back to catalog</button>
      </StyledButtonContainer>
    </StyledWrapper>
  );
};

export default ShowDetails;
