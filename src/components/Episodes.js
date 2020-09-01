import React, { useState, useEffect, Fragment } from 'react';
import Episode from './Episode';
import Spinner from './Spinner';
import Error from './Error';
import styled from '@emotion/styled';
import axiosClient from '../config/axios';
const Title = styled.h1`
    text-align: center;
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 2rem;
`;
const EpisodesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        // this endpoint doesn't allow the limit and offset arguments.
        axiosClient
            .get(`/episodes?series=breaking%20bad`)
            .then((res) => {
                setEpisodes(res.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, []);
    return (
        <Fragment>
            <Title>Episodes</Title>
            <EpisodesContainer>
                {episodes.map((episode) => {
                    return <Episode episode={episode} key={episode.episode_id} />;
                })}
            </EpisodesContainer>
            {loading ? <Spinner /> : null}
            {error ? <Error /> : null}
        </Fragment>
    );
};

export default Episodes;
