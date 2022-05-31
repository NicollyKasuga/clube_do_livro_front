import {AiOutlineSearch} from 'react-icons/ai'
import {Input, Container, Button} from './style'

export const SearchBar = () => {

    return(
        <Container>
        <Input className='input_nav' placeholder='Pesquise aqui'></Input>
        <Button>
        <AiOutlineSearch className='search_icon'/>
        </Button>
        </Container>
    )
}