import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';
import Nav from './Nav';
const HeaderContainer = styled.header`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 20px 0;
    @media (min-width: 768px) {
        justify-content: space-between;
        align-items: center;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Nav />
        </HeaderContainer>
    );
};

export default Header;
