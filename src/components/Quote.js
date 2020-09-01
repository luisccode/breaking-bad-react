import React from 'react';
import styled from '@emotion/styled';

const QuoteContainer = styled.blockquote`
    padding: 4rem 2rem;
    border-radius: 0.5rem;
    background-color: #fff;
    margin: 0 0 4rem 0;
    flex-basis: 80%;
    @media (min-width: 768px) {
        flex-basis: calc(50% - 4rem);
    }
    @media (min-width: 1440px) {
        flex-basis: calc(33.33% - 4rem);
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        text-align: center;
        position: relative;
        padding-left: 4rem;
        color: #000;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        width: fit-content;
        align-self: center;
    }
    span {
        font-size: 4rem;
        position: absolute;
        line-height: 1;
    }
    cite {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;
const LeftQuote = styled.span`
    top: -3px;
    left: -12px;
`;
const RightQuote = styled.span`
    bottom: 14px;
    right: -14px;
`;
const Quote = ({ quote: { quote, author } }) => {
    return (
        <QuoteContainer>
            <p>
                <LeftQuote>&ldquo;</LeftQuote>
                {quote}
                <RightQuote>&bdquo; </RightQuote>
            </p>
            <cite>-{author}</cite>
        </QuoteContainer>
    );
};

export default Quote;
