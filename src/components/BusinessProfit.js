import React from 'react'
import styled from 'styled-components'
import businessProfit from '../assets/images/business-profit.png'
import greenlight from '../assets/greenLight.svg'

const BusinessProfit = () => {
    return (
        <GridStyle>
            <ImageBox>
                <img src={businessProfit} alt="business profit" />
            </ImageBox>
            <TextBox>
                <h2>We help you to boost your business profitable with our talent marketer</h2>
                <p>
                    Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
                </p>
                <div className="svgSection">
                    <div className="container">
                        <span>
                            <img src={greenlight} alt="" />
                        </span>
                        Unlimited design possibility
                    </div>
                    <div className="container">
                        <span>
                            <img src={greenlight} alt="" />
                        </span>
                        Completey responsive 
                    </div>
                </div>
                <div className="explore">Explore details &gt; </div>
            </TextBox>
        </GridStyle>
    )
}

export default BusinessProfit


const GridStyle = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }    
    @media (min-width: 1024px) {
        padding: 4rem 0;
    }
`;

const ImageBox = styled.div `
    img {
        @media (min-width: 1440px) {
            /* padding-bottom: 5rem; */
            width: 90%;
        }
    }
` ;

const TextBox = styled.div `
    text-align: center;
    grid-area: 1;
    @media(min-width: 768px) {
        grid-area: 0;
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
            font-size: 2.5rem;
        }
    }
    p {
        padding: 1rem 0;
        @media(min-width: 1440px) {
            padding: 2rem 0;
            max-width: 60%;
            font-size: 20px;
        }
        @media (min-width: 1024px) {
            font-size: 18px;
        }
    }
    img {
        width: 10rem;
        /* background: pink ; */
    }

    .svgSection {

        .container {
            font-family: 'DM Sans',sans-serif;
            font-size: 1rem;
            padding: 0.5rem 0;
            text-align: left;
                @media (min-width: 1024px) {
                    font-size: 18px;
                }
                @media (min-width: 1440px) {
                    font-size: 20px;
                }
            
            span {
                img {
                    background: none;
                    width: 1rem;
                    height: auto;
                    margin-right: 0.8rem;
                }
            }
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