import style from "styled-components"

export const Background = style.div`
    width: 100vw;
    height: 100vh;
    background: #3D3D3C;
    display: ${props => props.bookModel ? "block" : "none"};
    z-index: 1;
    position: absolute;
    opacity: 65%;
`

export const Model = style.div`
    display: ${props => props.bookModel ? "flex" : "none"};
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    justify-content: center;


`

export const Container = style.div`
    margin-top: 6vh;
    width: 52vw;
    height: 65vh;
    background: #EFEFEF;
    border-radius: 3px;
    display:flex;
    flex-direction: column;
    padding-bottom: 20px;
    min-width: 575px;
    max-width: 575px;
    min-height: 480px;
    max-height: 480px;

    form{
        height: 87%;
    }

`

export const Header = style.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 12%;
    margin-top: 3px;
    border-bottom: solid 1px #9398A2;

    h1{
        font-size: 24px;
    }

    .close_icon{
        cursor: pointer;
        width: 20px;
        height: 20px;
        color: var(--blue);

        :hover{
            color: #1b579a;
        }
    }

`

export const ContainerInput = style.div`
    width: 100%;
    height: 83%;
    display: grid; 
    gap: 0px 0px; 
    grid-template: 
      "a b" 75px
      "c d" 75px
      "e f" 75px
      "g g" ;

      grid-template-columns: 50% 50%;
    .g {
        justify-self: center; 
        align-self: center; 
        grid-area: g; 
      }

    p{
        height: 14px;
        overflow: hidden;
        align-self: end;
        justify-self: center;
        white-space: nowrap;
        font-size: 12px;
    }

    .title_input,
    .edition_input,
    .isbn_input,
    .publisher_input,
    .authors_input,
    .genre_input{
        width: 70%;
        height: 60%;
        align-self: center;
        border-radius: 3px;
        background: #D9D9D9;
        padding-left: 5px;

        :hover{
            background: #E1DFDF;
        }
    }

    .title_input,
    .isbn_input,
    .authors_input{
        justify-self: end;
        margin-right: 10px;
        
        
    }

    .synopsis_input{
        background: #D9D9D9; 
        align-self: center;
        grid-area: g;
        height: 80%;
        padding-left: 5px;
        margin-left: 70px;
        border-radius: 3px;
        min-width: 417px;
        max-width: 417px;
        min-height: 80px;
        max-height: 80px;
        outline: none;
        border: none;
        padding-top: 5px;

        :hover{
            background: #E1DFDF;
        }
    }

    .title_error, .title_input{
        grid-area: a;
    }

    .edition_error, .edition_input{
        grid-area: b;
    }

    .isbn_error, .isbn_input{
        grid-area: c;
    }

    .publisher_error, .publisher_input{
        grid-area: d;
    }

    .authors_error{
        grid-area: e;
        
    }
    .genres_error{
        grid-area: f;
    }

    .synopsis_error{
        grid-area: g;
        position: relative;
        right: 160px;
        color: var(--red);
    }

    .title_error, .isbn_error, .authors_error{
        position: relative;
        left: 20px;
        top: 3px;
        color: var(--red);
        width: 62%;
    }

    .edition_error, .publisher_error, .genres_error{
        position: relative;
        right: 80px;
        top: 3px;
        color: var(--red);
        width: 43%;
    }
    
      
`

export const ButtonsContainer = style.div`
    display:flex;
    width: 100vw;
    height: 17%;
    width: 100%;
    align-items: center;
    justify-content:space-evenly;
    position: relative;

    input{
        display: none;
    }

    label{
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 42%;
        background: #95D6D6;
        justify-content: center;
        height: 75%;
        border-radius: 23px;
        color: #24405F;
        font-weight: bold;

        :hover{
            background: #a5e9e9;
        }
    }

    span{
        position: absolute;
        right: 277px;
        font-size: 12px;
        top: 65px;
        max-width: 210px;
        max-height: 14px;
        overflow: hidden;
        min-width: 210px;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    button{
        background: #24405F;
        width: 20%;
        height: 75%;
        border-radius: 25px;
        color: white;
        font-weight: bold;
        letter-spacing: 0.9px;

        :hover{
            background: #1b579a;
        }
    }

`
