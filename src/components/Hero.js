import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import paypal from '../assets/sponsor/paypal.svg'
import google from '../assets/sponsor/google.svg'
import dropbox from '../assets/sponsor/dropbox.svg'
import BannerThumb from '../assets/images/banner-thumb.png'


const Hero = () => {
    return (
        <MainLayout>
            <InnerLayout>
                <Container>
                    <FirstGridItem>
                        <h1>A Creative way to grow your Exciting Business Model</h1>
                        <p>Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>
                        <form>
                            <div className="formContainer">
                                <label htmlFor="email"></label>
                                <input type="email" id="email" name="email" placeholder="Enter your email"/>
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                        <div className="sponsorContainer">
                            <div className="text">Sponsored by:</div>
                            <div className="sponsors">
                                <img src={paypal} alt="paypal" />
                                <img src={google} alt="Google" />
                                <img src={dropbox} alt="Dropbox" />
                            </div>
                        </div>
                    </FirstGridItem>
                    <SecondGridItem>
                        <img src={BannerThumb} alt="banner" />
                    </SecondGridItem>
                </Container>
            </InnerLayout>
        </MainLayout>
    )
}

export default Hero


const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const FirstGridItem = styled.div `
    h1{
        font-size: 2.125rem;
        text-align: center;
        margin-bottom: 1.25rem;
        @media (min-width: 768px){

        }
        @media (min-width: 1024px) {
            font-size: 3rem;
            @media (min-width: 1024px){
            text-align: left;
        }
        }
        @media (min-width: 1440px) {
            font-size: 4rem;
        }
    }
    p{
        color: var(--text-secondary);
        font-size: 1rem;
        margin-bottom: 1.875rem;
        line-height: 1.9;
        text-align: center;
        @media (min-width: 1024px){
            text-align: left;
            font-size: 18px;
        }
        @media (min-width: 1440px) {
            font-size: 20px;
        }       
    }
    form{
        
        .formContainer{
            display: flex;
            width: 100%;
            justify-content: center;
            margin-bottom: 1.25rem;
            @media (min-width: 768px){
                justify-content: center;
            }
            @media (min-width: 1024px){
                justify-content: left;
            }

            input {
                outline: none;
                border: 1px solid var(--border-color);
                width: 50%;
                padding: 0.8rem;
                border-radius: 4px;
                font-size: 0.8rem;
                letter-spacing: 1.2;
                &:focus-within {
                    border: 1px solid var(--primary);
                }
            }
            button{
                display: inline-block;
                outline: none;
                border: none;
                /* text-decoration: none; */
                padding: 10px 15px;
                text-align: center;
                background-color: var(--primary);
                color: white;
                border-radius: 4px;
                font-weight: 700;
                font-family: 'DM Sans',sans-serif;
                line-height: 1.2;
                margin-left: 10px;
                cursor: pointer;
                &:hover {
                    box-shadow: rgba(249,84,84,0.3) 0px 9px 20px -5px;
                }
            }
        }
    }
    .sponsorContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 1024px){
            flex-direction: row;
        }
        .text {
            color: var(--muted);
            @media (min-width: 1024px) {
                padding-right: 20px;
                padding-bottom: 0;
                font-size: 16px;
                display: block;
            }
        }
        .sponsors {
            display: grid;
            gap: 0.5rem;
            grid-template-columns: repeat(3, 1fr);
            align-content: center;
            padding-top: 20px;
            img {
                width: 70%;
                &:last-child {
                    width: 100%;
                }
            }
        }
    }
` ;

const SecondGridItem = styled.div `
    margin-top: 3rem;
    img {
        @media (min-width: 1024px){
            width: 90%;
            margin-left: 1rem;
        }
    }
` ;