import React from 'react'
import styled from 'styled-components'
import FactKnowledge from '../components/FactKnowledge'
import { MainLayout, InnerLayout } from '../styles/Layouts'


const Knowledge = () => {
    return (
        <KnowledgeStyled>
            <MainLayout>
                <InnerLayout>
                    <FactKnowledge />
                </InnerLayout>
            </MainLayout>
        </KnowledgeStyled>
    )
}

export default Knowledge


const KnowledgeStyled = styled.section``;