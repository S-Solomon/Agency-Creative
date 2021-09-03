import React from 'react'
import styled from 'styled-components'

const MeetWork = () => {
    return (
        <MeetWorkStyled>
            <h2>Let’s meet how its work</h2>
            <p>Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.</p>
            <GridStyled>
                <div className="support">
                    <div className="digit">01</div>
                    <div className="textContainer">
                        <h3>Connect with Support</h3>
                        <p>Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.</p>
                    </div>
                </div>

                <div className="business">
                    <div className="digit">02</div>
                    <div className="textContainer">
                        <h3>Explain you business idea</h3>
                        <p>Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.</p>
                    </div>
                </div>

                <div className="money">
                    <div className="digit">03</div>
                    <div className="textContainer">
                        <h3>Be partner & earn money</h3>
                        <p>
                        Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases.
                        </p>
                    </div>
                </div>
            </GridStyled>
        </MeetWorkStyled>
    )
}

export default MeetWork

const MeetWorkStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 1.5rem 0;
    h2 {
        text-align: center;
        @media (min-width: 1024px) {
            font-size: 2rem;
        }
        @media (min-width: 1440px) {
            font-size: 2.5rem;
        }
    }
    p {
        padding: 1rem 0;
        max-width: 600px;
        text-align: center;
        margin: 0 auto;
        @media (min-width: 768px) {
            padding: 2rem 0;
        }
        @media (min-width: 1024px) {
            padding: 2.5rem 0;
        }
        @media (min-width: 1440px) {
            padding: 3rem 0;
        }
        @media (min-width: 1800px) {
            padding: 4rem 0;
        }
    }
`;


const GridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }    
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }

    .support {
        @media (min-width: 768px) {
            display: flex;
        }
        .digit {
            font-family: 'Roboto Slab',serif;
            font-weight: 300;
            font-size: 32px;
            text-align: center;
            @media (min-width: 768px) {
                padding-right: 1rem;
            }
        }
        .textContainer {
            text-align: center;
            p {
                padding-top: 1rem;
                
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

    .business {
        @media (min-width: 768px) {
            display: flex;
        }
        .digit {
            text-align: center;
            font-family: 'Roboto Slab',serif;
            font-weight: 300;
            font-size: 32px;
            @media (min-width: 768px) {
                padding-right: 1rem;
            }
        }
        .textContainer {
            text-align: center;
            p {
                padding-top: 1rem;
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

    .money {
        @media (min-width: 768px) {
            display: flex;
        }
        .digit {
            text-align: center;
            font-family: 'Roboto Slab',serif;
            font-weight: 300;
            font-size: 32px;
            @media (min-width: 768px) {
                padding-right: 1rem;
            }
        }
        .textContainer {
            text-align: center;
            p {
                padding-top: 1rem;
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