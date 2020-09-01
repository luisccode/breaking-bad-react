import React from 'react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.nav`
    flex-basis: 80%;
    margin-top: 1.5rem;
    display: flex;
    align-items: flex-start;
    @media (min-width: 768px) {
        margin-top: 0;
        flex-basis: 50%;
    }
    @media (min-width: 1024px) {
        flex-basis: 40%;
    }
`;
const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
`;
const Li = styled.li`
    list-style: none;
    padding-bottom: 0.5rem;
    font-size: 1.2rem;
    @media (min-width: 375px) {
        font-size: 1.6rem;
    }
    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

const Nav = () => {
    let location = useLocation().pathname;

    return (
        <NavContainer>
            <Ul>
                <Li className={location === '/characters' ? 'active' : ''}>
                    <Link to="/characters">Characters</Link>
                </Li>
                <Li className={location === '/episodes' ? 'active' : ''}>
                    <Link to="/episodes">Episodes</Link>
                </Li>
                <Li className={location === '/quotes' ? 'active' : ''}>
                    <Link to="/quotes">Quotes</Link>
                </Li>
                <Li className={location === '/deaths' ? 'active' : ''}>
                    <Link to="/deaths">Deaths</Link>
                </Li>
            </Ul>
        </NavContainer>
    );
};

export default Nav;
