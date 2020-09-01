import React, { useState, useEffect, Fragment } from 'react';
import Quote from './Quote';
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
const QuotesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/quotes?series=breaking bad`)
            .then((res) => {
                setQuotes(res.data);
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
            <QuotesContainer>
                {quotes.map((quote) => {
                    return <Quote quote={quote} key={quote.quote_id} />;
                })}
            </QuotesContainer>
            {loading ? <Spinner /> : null}
            {error ? <Error /> : null}
        </Fragment>
    );
};

export default Quotes;
