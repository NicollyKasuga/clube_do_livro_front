import styled from 'styled-components'

export const CustomButton = styled.button`
    width: 310px;
    height: 40px;
    border-radius: 3px;
    background: var(--navyblue);
    color: white;
    font-weight: bold;
    margin-top: 25px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover{
      background: var(--lightnavyblue);
    }

`