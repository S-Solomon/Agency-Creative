import React from 'react'
import styled from 'styled-components'
import clientThumb from '../assets/images/client-thumb.png'

const UsersWorldwide = () => {
    return (
        <DivStyled>
            <h2>More than thousand of user we have worldwide with happy feedback</h2>
            <p>Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred.</p>
            <img src={clientThumb} alt="client banner" />
        </DivStyled>
    )
}

export default UsersWorldwide



const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    h2 {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        @media (min-width: 1024px) {
            font-size: 2rem;
        }
        @media (min-width: 1440px) {
            font-size: 2.5rem;
        }
    }
    p {
        padding: 1rem 0;
        max-width: 500px;
        text-align: center;
        margin: 0 auto;
        @media (min-width: 1024px) {
                    font-size: 18px;
                }
                @media (min-width: 1440px) {
                    font-size: 20px;
                }
    }
    img {
        padding: 1rem 0;
        margin: 0 auto;
    }
`;

