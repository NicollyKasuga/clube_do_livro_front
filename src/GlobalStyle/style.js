import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: 0px;
    outline: 0;
}

:root{
    --darkblue: #24405F;
    --blue: #405673;
    --navyblue: #7ABFBF;
    --lightnavyblue: #98D6D6;
    --lightnavyblue-80 : #95D6D6
    --gray-80: #DEDEDE;
    --lightblue: #52B5F2;
    --grey: #6C7D8C;
    --lightgrey: #9398A2;
    --red: #FF4D4D;

}

body{
    background: white;
    color: var(--blue);
    font-family: 'Fira Sans', sans-serif;

    @keyframes fade{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
}

h1, h2, h3, h4, span, button, div, input, p {
    font-family: 'Fira Sans', sans-serif;
}

h1, h2, h3, h4{
    font-weight: bold;
}

button{
    cursor: pointer;
    border: none;
    font-style: normal;
    font-size: 16px;
}

a{
    text-decoration: none;
}

input{
    border: none
}
`

export default GlobalStyle