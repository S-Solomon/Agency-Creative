import styled from 'styled-components'


export const MainLayout = styled.div `
    padding: 0 1rem;
    @media (min-width: 400px) {
        padding: 0 2rem;
    }
    @media (min-width: 768px) {
        padding: 0 3rem;
    }
    @media (min-width: 1024px) {
        padding: 0 4rem;
    }
    @media (min-width: 1440px) {
        padding: 0 5rem;
    }
    @media (min-width: 1800px) {
        padding: 0 15rem;
    }
`;

export const InnerLayout = styled.div `
    margin: 4rem auto;
    @media (min-width: 768px) {
        margin: 8rem auto;
    }
    @media (min-width: 1024px) {
        margin: 10rem auto;
    }
`;