import React, { Fragment, useState, useEffect } from 'react';
import Button from './Button';
import Quote from './Quote';
import Spinner from './Spinner';
import axiosClient from '../config/axios';
import styled from '@emotion/styled';

const Container = styled.div`
    width: fit-content;
    margin: 2rem auto;
`;

const Home = () => {
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!loading) return;
        axiosClient.get(`/quote/random`).then((res) => {
            setQuote(res.data[0]);
            setLoading(false);
        });
    }, [loading]);

    return (
        <Fragment>
            <div className="container white-container">
                <h1 className="title tac">About this Project</h1>
                <p>
                    Explore the whole Breaking Bad world in this Website, see interesting
                    information like Episodes, Characters, Deaths of some Characters, it's last
                    words and More! This Project was Development with React, React Router Dom and
                    Styled Component, using{' '}
                    <a href="https://www.breakingbadapi.com/" className="link">
                        breakingbadapi.com
                    </a>{' '}
                    API
                </p>
                <p></p>
                <p>Click below to start Exploring all the Characters</p>
                <Button text="Click here" href="/characters" />
            </div>
            <Container className="container">
                {loading ? (
                    <Spinner />
                ) : (
                    <Quote className="mb-0" quote={quote} key={quote.quote_id} />
                )}
                {loading ? null : (
                    <Button
                        text="Generate Quote"
                        onClick={(e) => {
                            e.preventDefault();
                            setLoading(true);
                        }}
                    />
                )}
            </Container>
        </Fragment>
    );
};

export default Home;
