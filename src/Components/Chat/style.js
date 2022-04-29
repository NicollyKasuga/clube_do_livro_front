import styled from 'styled-components'

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
    width: 450px;
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
    background: green;

`

export const ChatDisplay = styled.div`

`

export const HeaderChat = styled.div`

`

export const MessagesContainer = styled.div`

`

export const InputContainer = styled.div`

`