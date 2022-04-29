import { Container } from "./style"
import {FaUserCircle} from 'react-icons/fa'

export const CardUser = ({user, id}) => {

    function handleClick(e) {
        console.log(e.getAttribute("data-id"))
    }

    return(
        <Container onClick={(e) => handleClick(e.currentTarget)} data-id={id}>
            <FaUserCircle/>
            <div>
                <p>{user}</p>
                <p>last message</p>
            </div>

        </Container>
    )
}