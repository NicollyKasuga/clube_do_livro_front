import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`
export const FormDiv = styled.div`
    width: 50vw;
    height: 100vh;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        text-align: center;
        color: var(--darkblue);
        margin-bottom: 40px;
        font-size: 45px;
    }

    span{
        color: var(--navyblue);
    }

    p{
        color: var(--grey);
    }
`

