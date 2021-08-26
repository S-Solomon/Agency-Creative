import React, { useState } from 'react'
import styled from 'styled-components'
import { MainLayout } from '../styles/Layouts'
import logoDark from '../assets/logo-dark.svg'
// import divider from '../assets/divider.svg'
import { activeStyle } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MainLayout>
            <Nav>
                <Logo href="/">
                    <img src={logoDark} alt="" />
                </Logo>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <MenuLink href="" activeStyle={{fontWeight: 'bold', color: 'yellow'}}>Home</MenuLink>
                    <MenuLink href="" activeClassName="selected">Features</MenuLink>
                    <MenuLink href="" activeClassName="selected">Feedback</MenuLink>
                    <MenuLink href="" activeClassName="selected">Support</MenuLink>
                </Menu>
            </Nav>
        </MainLayout>
    )
}

export default Navbar


const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: var(--text-primary);
    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    font-weight: bold;
    font-family: 'DM Sans', sans-serif;
    &:hover {
    color: var(--primary);
}
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    position: relative;
    padding: 0.5rem 0;
`;

const Logo = styled.a`
    text-decoration: none;
    img{
        font-size: 1rem;
        width: 70%;
    }
`;


const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .selected {
        color: var(--primary);
    }
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 20px;
        background: var(--heading-secondary);
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
}
`;