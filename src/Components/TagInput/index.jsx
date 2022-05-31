import { Container,GridBox } from "./style"
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from "react"

export const TagInput = ({authors, placeholder, register, data}) => {

    const [userInput, setUserInput] = useState([])

    function handleValue(e){
        let value = e.target.value
        if(e.key === "Enter"){
            e.preventDefault();            
            setUserInput([...userInput, value])
            e.target.value = '';
        }
        
    }

    function removeValue (index){
        const updatedArray = userInput.filter((value, i) => i !== index)
        console.log(userInput)
        setUserInput(updatedArray)
    }
    

    return(
        <>
        {userInput.length > 0 ?(
            <GridBox authors={authors}>
                <Container authors={authors}>
                <ul>
                    {userInput.map((item, index) =>(
                    <li key={index} className="items">
                        {item}
                        <AiOutlineClose className="delete_icon" onClick={()=> removeValue(index)}/>
                    </li>

                    ))}
                </ul>
                <input placeholder={placeholder} {...register(data)} onKeyDown={(event)=> handleValue(event)}/>
                </Container>
            </GridBox>

            
        ):
        (
            <GridBox authors={authors}>
                <Container authors={authors}>
                    <input placeholder={placeholder} {...register(data)} onKeyDown={(event)=> handleValue(event)}/>
                </Container>
            </GridBox>
        )
        }
        </>
    )
}