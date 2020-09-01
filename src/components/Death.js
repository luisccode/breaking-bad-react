import React from 'react';
import styled from '@emotion/styled';

const DeathContainer = styled.div`
    padding: 4rem 2rem;
    border-radius: 0.5rem;
    background-color: #fff;
    margin: 0 0 4rem 0;
    flex-basis: 80%;
    @media (min-width: 768px) {
        flex-basis: calc(50% - 4rem);
    }
    @media (min-width: 1440px) {
        flex-basis: calc(33.33% - 4rem);
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        text-align: center;
        padding-left: 4rem;
        color: #000;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        width: fit-content;
        align-self: center;
    }
`;
const Death = ({ death: { death, cause, responsible, last_words, season, episode } }) => {
    return (
        <DeathContainer>
            <p>
                <span className="fw-700">Death:</span> {death}
            </p>
            <p>
                <span className="fw-700">Cause:</span> {cause}
            </p>
            <p>
                <span className="fw-700">Responsible:</span> {responsible}
            </p>
            <p>
                <span className="fw-700">Last Words:</span> {last_words}
            </p>
            <p>
                <span className="fw-700">Episode:</span>
                {episode}X{season}
            </p>
        </DeathContainer>
    );
};

export default Death;
