import React from 'react';
import styled from '@emotion/styled';

const ErrorComponent = styled.div`
    background-color: red;
    width: fit-content;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 0.8rem;
    p {
        line-height: 1;
        margin: 0;
    }
`;
const Error = () => {
    return (
        <ErrorComponent className="tac">
            <p>Something is wrong..</p>
            <p>Checkout your internet conection.</p>
        </ErrorComponent>
    );
};

export default Error;
