import styled from 'styled-components'
import background from '../../Assets/background_message.png'

export const ChatClosed = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #DEDEDE;
    position: absolute;
    bottom: 0px;
    right: 30px;
    border-radius: 4px 4px 0px 0px;

    .chat_icon{
        color: #878888;
        height: 20px;
        width: 30px;
    }
`

export const ChatOpened = styled.div`
    width: 475px;
    height: 300px;
    background: #DEDEDE;
    position: absolute;
    bottom: 0px;
    right: 50px;
    border-radius: 6px 6px 0px 0px;
    display: flex;
`

export const UsersContainer = styled.div`
    width: 45%;
    height: 100%;
    bacground: #DEDEDE;
    border-radius: 6px 6px 0px 0px;
    display: flex;
    flex-direction: column;
`

export const NavSearch = styled.div`
    width: 100%;
    height: 25%;
    border-radius: 6px 6px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    .div_input{
        width: 80%;
        height: 50%;
        background: #95D6D6;
        display: flex;
        align-items: center;
        border-radius: 5px;

        .search_icon{
            position: absolute;
            left: 26px;
            color: white;
        }

        input{
            width: 100%;
            height: 80%;
            padding-left: 25px;
            box-sizing: border-box;
            background: #95D6D6;
            color: white;
            font-weight: 700;
        }
    }

   

   
`

export const ListOfUsers = styled.div`
    width: 100%;
    height: 75%;
    background: #DEDEDE;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

`

export const ChatDisplay = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%
    border-radius: 6px;
`

export const HeaderChat = styled.div`
    background: #DEDEDE;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 6px;
    
    p{
        color: black;
        width: 165px;
        max-width: 175px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 19px;
        white-space: nowrap;
    }

    .chat_icon_header{
        width: 24px;
        height: 35px;
    }

    .arrow_icon_header{
        height: 22px;
        width: 25px;
        margin-right: 5px;
        cursor: pointer;
    }

`

export const MessagesContainer = styled.div`
    width:100%;
    height: 60%;
    background-image: url(${background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
    overflow-y: auto;
    justify-content: flex-start;

    .background_color{
        width: 100%;
        height: 100%;
        background: #ededed;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 160px;
        }
    }

}

`

export const InputContainer = styled.div`
    width: 100%;
    height: 15%;
    background: #DEDEDE;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div{
        width: 175px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        border-radius: 8px;
        background: white;
    }

    button{
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        border-radius: 12px;
        justify-content: center;
        background: #95D6D6;
    }

    .send_button_icon{
        width: 20px;
        height: 20px;
        color: white;
        margin-right: 2px;
    }
`