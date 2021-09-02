import React from 'react'
import styled from 'styled-components'
import BusinessProfit from '../components/BusinessProfit'
import { MainLayout, InnerLayout } from '../styles/Layouts'

const Business = () => {
    return (
        <BusinessStyled>
            <MainLayout>
                <InnerLayout>
                    <BusinessProfit />
                </InnerLayout>
            </MainLayout>
        </BusinessStyled>
    )
}

export default Business


const BusinessStyled = styled.section ``;