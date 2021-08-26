import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


const Header = () => {
    return (
        <>
            <HeaderStyled>
                <Navbar />
                <Hero />
            </HeaderStyled>
        </>
    )
}

export default Header


const HeaderStyled = styled.header `

`;