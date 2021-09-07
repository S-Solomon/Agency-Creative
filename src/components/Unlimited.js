import React from 'react'
import styled from 'styled-components'
import marketIcon from '../assets/feature/marketplace.svg'
import awardIcon from '../assets/feature/award.svg'
import giftIcon from '../assets/feature/gift.svg'

const Unlimited = () => {
    return (
        <UnlimitedStyled>
            <h2>Go Beyond unlimited features</h2>
            <p className="para">Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.</p>
            <ContainerStyled>
                <div className="market">
                    <img src={marketIcon} alt="marketplace" />
                    <div className="textContainer">
                        <h3>Trusted marketplace</h3>
                        <p>Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.</p>
                    </div>
                </div>
                <div className="gift">
                    <img src={giftIcon} alt="gift" />
                    <div className="textContainer">
                        <h3>Customer Gift vouchers</h3>
                        <p>Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.</p>
                    </div>
                </div>
                <div className="award">
                    <img src={awardIcon} alt="award" />
                    <div className="textContainer">
                        <h3>Multiple Awards wins</h3>
                        <p>Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.</p>
                    </div>
                </div>
            </ContainerStyled>
        </UnlimitedStyled>
    )
}

export default Unlimited

const UnlimitedStyled = styled.div `
    text-align: center;
    h2{
        /* text-align: center; */
        @media (min-width: 768px) {
            font-size: 2rem;
        }
    }
    .para {
        padding: 1rem 0;
        line-height: 1.9;
        @media (min-width: 768px) {
            text-align: center;
            padding: 2.5rem 2rem;
        }
        @media (min-width: 1024px) {
            font-size: 18px;
        }
        @media (min-width: 1440px) {
            font-size: 20px;
        }
    }
`;

const ContainerStyled = styled.div `
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }    
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }
    .market{
        text-align: center;
        padding: 1rem 0;
        @media (min-width: 768px) {
            display: flex;
            text-align: left;
        }
        img {
            padding-bottom: 0.5rem;
            @media (min-width: 768px) {
                padding-right: 1rem;
                align-self: flex-start;
            }
        }
        .textContainer {
            text-align: center;
            p {
                padding-top: 1rem;
                @media (min-width: 1024px) {
                    font-size: 18px;
                }
                @media (min-width: 1440px) {
                    font-size: 20px;
                }
            }
            h3 {
                font-family: 'DM Sans', sans-serif;
            }
            @media (min-width: 768px) {
                display: flex;
                flex-direction: column;
                h3 {
                    text-align: left;
                }
                p {
                    text-align: left;
                    /* padding-top: 1rem; */
                }
            }
        }
    }
    .gift{
        text-align: center;
        @media (min-width: 768px) {
            display: flex;
            text-align: left;
            padding: 1rem 0;
        }
        img {
            padding-bottom: 0.5rem;
            @media (min-width: 768px) {
                padding-right: 1rem;
                align-self: flex-start;
            }
        }
        .textContainer {
            text-align: center;
            p {
                padding-top: 1rem;
                @media (min-width: 1024px) {
                    font-size: 18px;
                }
                @media (min-width: 1440px) {
                    font-size: 20px;
                }
            }
            h3 {
                font-family: 'DM Sans', sans-serif;
            }
            @media (min-width: 768px) {
                display: flex;
                flex-direction: column;
                h3 {
                    text-align: left;
                }
                p {
                    text-align: left;
                    /* padding-top: 1rem; */
                }
            }
        }
    }
    .award {
        text-align: center;
        padding: 1rem 0;
        @media (min-width: 768px) {
            display: flex;
            text-align: left;
        }
        img {
            padding-bottom: 0.5rem;
            @media (min-width: 768px) {
                padding-right: 1rem;
                align-self: flex-start;
            }
        }
        .textContainer {
            text-align: center;
            p {
                padding-top: 1rem;
                @media (min-width: 1024px) {
                    font-size: 18px;
                }
                @media (min-width: 1440px) {
                    font-size: 20px;
                }
            }
            h3 {
                font-family: 'DM Sans', sans-serif;
            }
            @media (min-width: 768px) {
                display: flex;
                flex-direction: column;
                h3 {
                    text-align: left;
                }
                p {
                    text-align: left;
                    /* padding-top: 1rem; */
                }
            }
        }
    }
`;