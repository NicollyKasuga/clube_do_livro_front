import styled, { keyframes } from 'styled-components'


const Appear = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--darkblue);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .wave{
        animation: ${Appear} 2s ;
        position: absolute;
        bottom: 0px;
        width: 100vw;
    }

    .logo_confirm{
        animation: ${Appear} 2s ;
    }

    h1, h2{
        color: white;
        animation: ${Appear} 2s ;
    }

    .text_1{
        margin: 30px;
        color: #63ced9;
    }
      
`