import React, { forwardRef } from 'react';
import styled from '@emotion/styled/macro';

const CharacterContainer = styled.div`
    border-radius: 0.4rem;
    height: 30rem;
    margin-bottom: 4rem;
    position: relative;
    overflow: hidden;
    flex-basis: 80%;
    @media (min-width: 768px) {
        flex-basis: calc(50% - 4rem);
    }
    @media (min-width: 1024px) {
        flex-basis: calc(25% - 4rem);
    }
    &::after {
        content: '';
        background-image: url(${(props) => props.img});
        background-size: cover;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }
`;
const CharacterContent = styled.div`
    font-weight: light;
    font-size: 3rem;
    position: absolute;
    width: 100%;
    min-height: 100%;
    text-align: center;
    transition: all 0.5s ease-out;
    transform: translatey(85%);
    h4 {
        font-weight: 400;
        font-size: 2.5rem;
        margin: 0.5rem 0;
        line-height: 1.4;
    }
    &::after {
        content: '';
        background: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    ${CharacterContainer}:hover & {
        transform: translatey(48%);
    }
`;
const CardBody = styled.div`
    width: 90%;
    margin: 0 auto;
    p {
        margin: 0 0 1rem 0;
        font-size: 1.4rem;
        line-height: 1.2;
    }
`;
const Character = forwardRef(
    ({ character: { name, img, occupation, nickname, status } }, lastCharacter) => {
        return (
            <CharacterContainer ref={lastCharacter} img={img}>
                <CharacterContent>
                    <h4>{name}</h4>
                    <CardBody>
                        <p>Occupation: {occupation[0]}</p>
                        <p>NickName: {nickname} </p>
                        <p>Status: {status} </p>
                    </CardBody>
                </CharacterContent>
            </CharacterContainer>
        );
    }
);

export default Character;
