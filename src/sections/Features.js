import React from 'react'
import styled from 'styled-components'
import Unlimited from '../components/Unlimited'
import { MainLayout, InnerLayout } from '../styles/Layouts'

const Features = () => {
    return (
        <FeaturesStyled>
            <MainLayout>
                <InnerLayout>
                    <Unlimited />
                </InnerLayout>
            </MainLayout>
        </FeaturesStyled>
    )
}

export default Features


const FeaturesStyled = styled.section ``;