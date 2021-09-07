import React from 'react'
import logo from '../assets/footer-logo.svg'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterStyled>
            <GridStyled>
                <div className="about">
                    <h3>About Us</h3>
                    <nav>
                        <a href="/">Support Center</a>
                        <a href="/">Customer Support</a>
                        <a href="/">About Us</a>
                        <a href="/">Copyright</a>
                    </nav>
                </div>
                <div className="information">
                    <h3>Information</h3>
                    <nav>
                        <a href="/">Return Policy</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms & Conditions</a>
                        <a href="/">Site Map</a>
                    </nav>
                </div>
                <div className="account">
                    <h3>My Account</h3>
                    <nav>
                        <a href="/">Press inquires</a>
                        <a href="/">Social media</a>
                        <a href="/">directories</a>
                        <a href="/">Images & B-roll</a>
                    </nav>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <nav>
                        <a href="/">Facebook</a>
                        <a href="/">Twitter</a>
                        <a href="/">Github</a>
                        <a href="/">Dribble</a>
                    </nav>
                </div>
            </GridStyled>
            <Logostyled>
                <img src={logo} alt="" />
                <div className="text">
                    <a href="/">Terms of use | Privacy</a>
                    <p>Copyright by 2020 RedQ, Inc</p>
                </div>
            </Logostyled>
        </FooterStyled>
    )
}

export default Footer

const FooterStyled = styled.div`
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    @media(min-width: 768px) {
        flex-direction: row;
    }
    @media (min-width: 1024px) {
        margin: 0 auto;
        margin-top: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


const Logostyled = styled.div`
    img {
        padding-bottom: 1rem;
    }
    .text {
        p {
            padding: 1rem 0;
        }
    }
    padding-top: 2rem;
    text-align: center;
    @media(min-width: 768px) {
        order: 1;
        margin-right: 2rem;
        padding-top: 0;
    }
    @media (min-width: 1024px) {
        img {
            width: 70%;
        }
        .text {
            p {
                font-size: 0.9rem;
            }
        }
    }
    
`;


const GridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1rem;
    @media(min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        order: 2;
    }
    @media (min-width: 1024px) {
    }
    .about {
        padding-right: 2rem;
        h3 {
            font-size: 1rem;
            font-weight: 500;
            font-family: 'DM Sans',sans-serif;
            @media (min-width: 900px) {
                padding-bottom: 1.5rem;
            }
        }
        nav {
            display: flex;
            flex-direction: column;
            a {
                font-family: 'DM Sans',sans-serif;
                font-weight: normal;
                font-size: 0.8rem;
                line-height: 1.9;
            }
        }
    }
    .information {
        padding-right: 2rem;

        display: flex;
        flex-direction: column;
        h3 {
            font-size: 1rem;
            font-weight: 500;
            font-family: 'DM Sans',sans-serif;
            @media (min-width: 900px) {
                padding-bottom: 1.5rem;
            }
        }
        nav {
            display: flex;
            flex-direction: column;
            a {
                font-family: 'DM Sans',sans-serif;
                font-weight: normal;
                font-size: 0.8rem;
                line-height: 1.9;
            }
        }
    }
    .account {
        display: flex;
        flex-direction: column;
        h3 {
            font-size: 1rem;
            font-weight: 500;
            font-family: 'DM Sans',sans-serif;
            @media (min-width: 900px) {
                padding-bottom: 1.5rem;
            }
        }
        nav {
            display: flex;
            flex-direction: column;
            a {
                font-family: 'DM Sans',sans-serif;
                font-weight: normal;
                font-size: 0.8rem;
                line-height: 1.9;
            }
        }
    }
    .contact {
        display: flex;
        flex-direction: column;
        h3 {
            font-size: 1rem;
            font-weight: 500;
            font-family: 'DM Sans',sans-serif;
            @media (min-width: 900px) {
                padding-bottom: 1.5rem;
            }
        }
        nav {
            display: flex;
            flex-direction: column;
            a {
                font-family: 'DM Sans',sans-serif;
                font-weight: normal;
                font-size: 0.8rem;
                line-height: 1.9;
            }
        }
    }
`;
