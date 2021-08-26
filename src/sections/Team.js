import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'

const Team = () => {
    return (
        <TeamStyled>
            <MainLayout>
                <InnerLayout>
                </InnerLayout>
            </MainLayout>
        </TeamStyled>
    )
}

export default Team


const TeamStyled = styled.section ``;