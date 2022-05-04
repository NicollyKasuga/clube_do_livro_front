import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: white;
    display: flex;
    margin: 1px 0px 2px 0px;
    height: 50px;

    div{
        width: 85%;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: end;

        .user_name{
            font-size: 14px;
            color: black;
            margin-right: 3px;
            max-width: 145px;
            overflow: hidden;
            text-overflow: ellipsis;
            max-height: 17px;
            white-space: nowrap;
        }

        .message{
            font-size: 12px;
            margin-right: 3px;
            max-width: 135px;
            overflow: hidden;
            text-overflow: ellipsis;
            max-height: 14px;
            white-space: nowrap;
        }
    }

    .user_icon{
        width: 25px;
        height: 45px;
        margin-left: 7px;
        margin-right: 2px;
    }
`