import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'


const Hero = () => {
    return (
        <MainLayout>
            <InnerLayout>
                <Container>
                    <FirstGridItem>
                        <h1>A creative way to grow your Exciting Business Model</h1>
                        <p>Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
                    </FirstGridItem>
                    <SecondGridItem></SecondGridItem>
                </Container>
            </InnerLayout>
        </MainLayout>
    )
}

export default Hero


const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr;
`;

const FirstGridItem = styled.div `
    h1{
        font-size: 2.125rem;
    }
    p {
        color: var(--text-secondary);
        font-size: 1rem;
    }
` ;

const SecondGridItem = styled.div `` ;