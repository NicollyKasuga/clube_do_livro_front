import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 14vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--darkblue);

    img{
        width: 165px;
        margin-left: 30px;
    }
    
    .content_navbar{
        width: 80%;
        max-width: 1200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .user_icon{
        margin-right: 20px;
        height: 30px;
        width: 30px;
        color: white;
    }

    .user_button{
        width: 35px;
        height: 35px;
        background: none;
    }

`