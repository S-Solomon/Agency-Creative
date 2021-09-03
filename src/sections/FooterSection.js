import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { MainLayout, InnerLayout } from '../styles/Layouts'

const FooterSection = () => {
    return (
        <FooterStyled>
            <MainLayout>
                <InnerLayout>
                    <Footer />
                </InnerLayout>
            </MainLayout>
        </FooterStyled>
    )
}

export default FooterSection

const FooterStyled = styled.section``;