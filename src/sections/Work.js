import React from 'react'
import styled from 'styled-components'
import MeetWork from '../components/MeetWork'
import { MainLayout, InnerLayout } from '../styles/Layouts'

const Work = () => {
    return (
        <WorkStyled>
            <MainLayout>
                <InnerLayout>
                <MeetWork />
                </InnerLayout>
            </MainLayout>
        </WorkStyled>
    )
}

export default Work


const WorkStyled = styled.section `
    background-color: var(--background-secondary);

`;