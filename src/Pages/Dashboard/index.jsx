import { Chat } from "../../Components/Chat"
import { NavBar } from "../../Components/NavBar/indes"

export const Dashboard = ({history}) => {
    return(
        <>
        <NavBar history={history}/>
        <Chat/>
        </>
    )
}