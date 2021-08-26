import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle `
${'' /* @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'); */}
${'' /* @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap'); */}

*, ::before , ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

body {
    background-color: --background-primary;
    font-family: 'DM Sans', sans-serif;
}

html {
    scroll-behavior: smooth;
}

a {
    font-family: 'DM Sans', sans-serif;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
}

h1, h2, h3, a{
    color: var(--heading-primary);
    font-family: 'Bree Serif', serif;
}

img {
    max-width: 100%;
}

p {
    color: var(--text-primary);
}

:root {
    --text-primary: #343D48;
    --text-secondary: #02073E;
    --heading-primary: #0F2137; // primary heading color
    --heading-secondary: #02073E; // heading color
    --background-primary: #FFFFFF; //  background color
    --background-secondary: #F9FAFC; // secondary background color
    --border-color: #E5ECF4; // border color
    --primary: #F94962; // primary button and link color
    --secondary: #3183FF; // secondary color - can be used for hover states
    --muted: #7B8188; // muted color
    --accent: #609; // a contrast color for emphasizing UI
    --yellow: #F6C416;
}

`;


export default GlobalStyle;