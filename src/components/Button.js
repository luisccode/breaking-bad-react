import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
    a {
        background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
        background-size: 300px;
        color: #fff;
        margin: 0 auto;
        padding: 1rem 3rem;
        font-size: 2rem;
        border: 2px solid black;
        transition: background-size 0.8s ease;
        :hover {
            cursor: pointer;
            background-size: 400px;
        }
    }
`;

const Button = ({ text, href = '', onClick }) => {
    return (
        <ButtonContainer>
            <Link to={href} onClick={onClick}>
                {text}
            </Link>
        </ButtonContainer>
    );
};

export default Button;
