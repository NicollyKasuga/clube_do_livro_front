import style from "styled-components"

export const GridBox = style.div`
    width: 206px;
    max-width: 206px;
    justify-self: ${props => props.authors ? "end": ""};
    margin-right: ${props => props.authors ? "10px": "0"};
    height: 40px;
    background: #d9d9d9;
    border-radius: 3px;
    display: grid;
    align-self: center;
    grid-area: ${props => props.authors ? "e" : "f"};

`

export const Container = style.div`
        width: 100%;
        max-width: 206px;
        height: 100%;
        align-self: center;
        background: #d9d9d9;
        border-radius: 3px;
        display: flex;

    ul{
        display: flex;
        width: 65%;
        justify-content: start;
        height: 100%;
        overflow: scroll;
    }

    li{
        list-style: none;
        margin: 4px 3px;
        border-radius: 5px;
        padding: 5px;
        border: 1px solid;
        display: flex;
        font-size: 12px;
        height: 35%;
        align-self: center;
        text-align: center;
    }

    .delete_icon{
        list-style: none;
        margin: 4px 3px;
        border-radius: 5px;
        display: -webkit-box;
        align-self: center;
        text-align: center;
        width: 12px;
        height: 12px;
        cursor: pointer;
    }

    input{
        border: none;
        background: #d9d9d9;
        border-radius: 5px;
        padding-right: 5px;
        flex-grow: 1;
        width: 29%;
        padding-left: 5px;

        :hover{
            background: #E1DFDF;
        }
    }
`