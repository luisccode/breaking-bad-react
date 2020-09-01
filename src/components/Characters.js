import React, { useState, useEffect, useRef, useCallback, Fragment } from 'react';
import styled from '@emotion/styled';
import Character from './Character';
import Spinner from './Spinner';
import Error from './Error';
import axiosClient from '../config/axios';

const CharactersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
const Title = styled.h1`
    text-align: center;
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 2rem;
`;
const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(false);
    const observer = useRef(null);

    const lastCharacter = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting & hasMore) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    useEffect(() => {
        setLoading(true);
        // Get characters by groups of 16
        axiosClient
            .get(`/characters?limit=16&offset=${page * 16}`)
            .then((res) => {
                setCharacters((previusCharacters) => previusCharacters.concat(res.data));
                setHasMore(res.data.length === 16);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, [page]);
    return (
        <Fragment>
            <Title>Characters</Title>
            <CharactersContainer>
                {characters.map((character, index) => {
                    if (characters.length === index + 1) {
                        return (
                            <Character
                                ref={lastCharacter}
                                character={character}
                                key={character.char_id}
                            />
                        );
                    } else {
                        return <Character character={character} key={character.char_id} />;
                    }
                })}
            </CharactersContainer>
            {loading ? <Spinner /> : null}
            {error ? <Error /> : null}
        </Fragment>
    );
};

export default Characters;
