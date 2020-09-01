import React from 'react';
import styled from '@emotion/styled';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
    flex-basis: 50%;
    @media (min-width: 768px) {
        flex-basis: 25%;
    }
    @media (min-width: 1024px) {
        flex-basis: 18%;
    }
`;

const Logo = () => {
    return (
        <LogoContainer>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
        </LogoContainer>
    );
};

export default Logo;
