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
`;

export const InnerLayout = styled.div `
    margin: 4rem auto;
`;