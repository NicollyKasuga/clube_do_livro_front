import { Container } from "./style"
import {FaUserCircle} from 'react-icons/fa'
import api from '../../Service/index'

export const CardUser = ({user, id, setCurrentChatName, setCurrentChatMessages }) => {

    function handleClick(e) {
        const recieve_user_id = e.getAttribute("data-id")
        const send_user_id = localStorage.getItem("user.id")


        setCurrentChatName(e.getAttribute("data-user"))

        // api.get("/messages", recieve_user_id, send_user_id)
        // .then((response) =>{

        //     setCurrentChatMessages(response.data)

        // })
        // .catch((err) => console.log(err));
    }

    return(
        <Container onClick={(e) => handleClick(e.currentTarget)} data-id={id} data-user={user}>
            <FaUserCircle className="user_icon"/>
            <div>
                <p className="user_name">{user}</p>
                <p className="message">last message</p>
            </div>

        </Container>
    )
}