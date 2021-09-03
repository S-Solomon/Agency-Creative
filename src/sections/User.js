import React from 'react'
import styled from 'styled-components'
import UsersWorldwide from '../components/UsersWorldwide'
import { MainLayout, InnerLayout } from '../styles/Layouts'

const User = () => {
    return (
        <UserStyled>
            <MainLayout>
                <InnerLayout>
                <UsersWorldwide />
                </InnerLayout>
            </MainLayout>
        </UserStyled>
    )
}

export default User


const UserStyled = styled.section ``;