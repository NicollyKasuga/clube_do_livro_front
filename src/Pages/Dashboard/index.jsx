import { Chat } from "../../Components/Chat"
import { NavBar } from "../../Components/NavBar/indes"
import { useEffect } from "react"

export const Dashboard = ({history, authenticated}) => {

   useEffect(()=>{
        if(!authenticated){
            return history.push("/Entrar")
        }
   }, [])

    return(
        <>
        <NavBar history={history}/>
        <Chat/>
        </>
    )
}