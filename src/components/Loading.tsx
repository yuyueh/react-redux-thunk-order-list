import React from 'react';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
    text-align: center;
    padding: 10px 0px;
`;

const Loading = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    &::after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #ddd;
        border-color: #ddd transparent #ddd transparent;
        animation: ${loadingAnimation} 1.2s linear infinite;
    }
`;

const LoadingComponent = () => {
    return (
        <Wrapper>
            <Loading></Loading>
        </Wrapper>
    );
};

export default LoadingComponent;
