import React from 'react'
import styled from 'styled-components'
import SupportTeam from '../components/SupportTeam'
import { MainLayout, InnerLayout } from '../styles/Layouts'

const Team = () => {
    return (
        <TeamStyled>
            <MainLayout>
                <InnerLayout>
                <SupportTeam />
                </InnerLayout>
            </MainLayout>
        </TeamStyled>
    )
}

export default Team


const TeamStyled = styled.section ``;