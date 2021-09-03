import React from 'react'
import styled from 'styled-components'
import knowledgeBanner from '../assets/images/knowledge-thumb.png'

const FactKnowledge = () => {
    return (
        <GridStyle>
            <TextBox>
                <h2>We are committed to using fact-based knowledge to our customers</h2>
                <p>Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                <div className="explore">Explore details &gt;</div>
            </TextBox>
            <ImageBox>
                <img src={knowledgeBanner} alt="knowledge banner" />
            </ImageBox>
        </GridStyle>
    )
}

export default FactKnowledge


const GridStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ImageBox = styled.div `
    img {
        @media (min-width: 1024px) {
            width: 100%;
            padding-bottom: 3rem;
        }
        @media (min-width: 1440px) {
            padding-bottom: 5rem;
            width: 90%;
        }
    }
` ;


const TextBox = styled.div `
    text-align: center;
    @media(min-width: 768px) {
        text-align: left;
    }
    @media (min-width: 1024px) {
        padding: 4rem 0;
    }
    

    h2 {
        @media (min-width: 1024px) {
            font-size: 2rem;
        }
        @media (min-width: 1440px) {
            font-size: 3rem;
        }
    }
    p {
        padding: 1rem 0;
        @media(min-width: 1440px) {
            padding: 2rem 0;
            max-width: 60%;
        }
    }

    .explore {
        padding: 1rem 0;
        color: var(--secondary);
        @media(min-width: 1440px) {
            /* text-align: center; */
            padding: 2rem 0;
        }
        &:hover {
            color: var(--primary);
        }
    }
`;