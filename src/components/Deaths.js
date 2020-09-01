import React, { useState, useEffect, Fragment } from 'react';
import Death from './Death';
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
const DeathsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
const Deaths = () => {
    const [deaths, setDeaths] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/deaths`)
            .then((res) => {
                setDeaths(res.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <Fragment>
            <Title>Deaths</Title>
            <DeathsContainer>
                {deaths.map((death) => {
                    return <Death death={death} key={death.death_id} />;
                })}
            </DeathsContainer>
            {loading ? <Spinner /> : null}
            {error ? <Error /> : null}
        </Fragment>
    );
};

export default Deaths;
