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
        align-self: center;
    }
    
    .content_navbar{
        width: 80%;
        max-width: 1200px;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 0.9fr 0.13fr 0.13fr;
        grid-template-rows: 1fr;
        gap: 0px 10px;
        grid-template-areas: ". . . .";
    }


    .user_icon, .add_button{
        margin-right: 20px;
        height: 30px;
        width: 30px;
        color: white;
    }

    .user_button, .add_book_button{
        width: 35px;
        height: 35px;
        background: none;
        justify-self: center;
        align-self: center;
    }

    .logout_icon{
        width: 25px;
        height: 25px;
        color: white;
    }

`