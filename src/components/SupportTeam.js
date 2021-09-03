import React from 'react'
import teambanner from '../assets/images/support-thumb.png'
import styled from 'styled-components'

const SupportTeam = () => {
    return (
        <DivStyled>
            <h2 className="sectionheader">Meet our support team who always work hardly behind the scenes</h2>
            <p>
            Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred.
            </p>
            <img src={teambanner} alt="team" />
            <div className="question">
                <h2>Do you have any question? Feel free to contact us</h2>
                <button>CONTACT US NOW</button>
            </div>
        </DivStyled>
    )
}

export default SupportTeam



const DivStyled = styled.div`
    position: relative;
    align-content: center;
    .sectionheader {
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
        font-size: 1.5rem;
        @media (min-width: 1024px){
            font-size: 2rem;
        }
        @media (min-width: 1440px){
            font-size: 2.5rem;
        }
    }
    p {
        text-align: center;
        padding: 2rem 0;
        max-width: 700px;
        margin: 0 auto;
    }
    img {
        display: inline-block;
        margin: 0 auto;
        width: 90%;
    }
    .question {
        position: absolute;
        top: 96%;
        width: 100%;
        border-radius: 7px;
        background-color: #183656;
        margin: 0 auto;
        padding: 1.5rem 2rem;
        text-align: center;
        h2 {
            color: white;
            padding: 1rem 0;
            @media (min-width: 1024px) {
                font-size: 2.9rem;
            }
        }
        button {
            appearance: none;
            display: inline-block;
            text-align: center;
            border: 0;
            border-radius: 4px;
            padding: 15px 20px;
            font-family: 'DM Sans',sans-serif;
            cursor: pointer;
            font-weight: 700;
            font-size: 12px;
            color: white;
            background-color: var(--primary);
            transition: background-color 0.35s ease;
            margin: 0 auto;
            margin: 1rem 0;
            @media (min-width: 768px) {
                color: #183656;
                background-color: white;
                &:hover {
                    color: white;
                    background-color: var(--primary);
                }
            }
        }
    }
`;