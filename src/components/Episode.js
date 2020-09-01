import React from 'react';
import styled from '@emotion/styled';

const EpisodeContainer = styled.div`
    border-radius: 0.4rem;
    height: 30rem;
    margin-bottom: 4rem;
    flex-basis: 80%;
    @media (min-width: 768px) {
        flex-basis: calc(50% - 4rem);
    }
    @media (min-width: 1024px) {
        flex-basis: calc(33.33% - 4rem);
    }
    @media (min-width: 1440px) {
        flex-basis: calc(25% - 4rem);
    }
    h4 {
        font-weight: 400;
        font-size: 2.5rem;
        margin: 1rem 0;
        line-height: 1.4;
        text-align: center;
    }
    p {
        margin: 0 0 1rem 0;
        line-height: 1.4;
    }
`;
const Episode = ({ episode: { title, season, air_date, characters, episode } }) => {
    characters = characters.slice(0, 4);
    return (
        <EpisodeContainer className="white-container">
            <h4>{title}</h4>
            <p>
                <span className="fw-700">Season: </span> {season}
            </p>
            <p>
                <span className="fw-700">Episode: </span> {episode}
            </p>
            <p>
                <span className="fw-700">Characters: </span>{' '}
                {characters.map((character, index) =>
                    characters.length === index + 1 ? character + '...' : character + ', '
                )}
            </p>
            <p>
                <span className="fw-700">Air Date:</span> {air_date}
            </p>
        </EpisodeContainer>
    );
};

export default Episode;
