import styled from 'styled-components'

export const Container = styled.div`
    width: 45%;
    height: 26%;
    margin: 9px 0px;
    display: flex;
    background: ${props => props.is_user ? "var(--blue)": "var(--grey)"};
    align-self: ${props => props.is_user ? "end": ""};
    border-radius: ${props => props.is_user ? "4px 0px 0px 4px": "0px 4px 4px 0px"};
    justify-content: center;
    flex-direction: column;
    
    p, span{
        color: white;
    }

    .text_message_users{
        font-size: 18px;
        margin-left: 3px;
    }
    
    .hour_message_users{
        font-size: 12px;
        text-align: end;
        margin-right: 6px;
    }
`