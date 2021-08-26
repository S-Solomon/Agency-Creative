import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'

const User = () => {
    return (
        <UserStyled>
            <MainLayout>
                <InnerLayout>
                </InnerLayout>
            </MainLayout>
        </UserStyled>
    )
}

export default User


const UserStyled = styled.section ``;