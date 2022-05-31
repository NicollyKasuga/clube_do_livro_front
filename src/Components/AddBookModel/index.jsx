import { Background,Container,Model, Header, ContainerInput, ButtonsContainer } from "./style"
import {AiOutlineClose} from 'react-icons/ai'
import {IoMdImage} from 'react-icons/io'
import { TagInput } from "../TagInput"
import { useState } from "react"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "../../Contexts/Reader"

export const AddBookModel = ({bookModel, setBookModel}) => {

    const [userFile, setUserFile] = useState([]);
    const {createBook} = useAuth();

    const formSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório*"),
        edition: yup.number().typeError("Digite um ano*").test('len', 'Digite um ano válido*', val => val.toString().length === 4)
        .required("Campo obrigatório*") ,
        isbn: yup.number().typeError("Digite uma sequência numérica*").test('len', 'ISBN inválido*', val => val.toString().length === 13).required("Campo obrigatório*"),
        publisher: yup.string().required("Campo obrigatório*"),
        authors: yup
        .mixed().when("isArray", {is: Array.isArray,then: yup.array().of(yup.string()),otherwise: yup.string()})
        .required("Campo obrigatório*"),
        genres:yup.mixed().when("isArray", {is: Array.isArray,then: yup.array().of(yup.string()),otherwise: yup.string()})
        .required("Campo obrigatório*"),
        synopsis: yup.string().required("Campo obrigatório*"),
        file: yup.mixed()
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    function handleCreateNewBook(data){
        try{
            createBook({data})
        } catch(err){
            console.log(err)
        }

    }

    function ToggleModel(){
        setBookModel(false)
    }

    function handleFile (file){
        setUserFile(file.files[0])
    }

    return(
        <>
            <Background bookModel={bookModel}>
            </Background>
            <Model  bookModel={bookModel}>
                <Container bookModel={bookModel}>
                    <Header>
                        <h1>Adicionar Livro</h1>
                        <AiOutlineClose className="close_icon" onClick={() => ToggleModel()}/>
                    </Header>
                    <form onSubmit={handleSubmit(handleCreateNewBook)}>
                    <ContainerInput>
                    <input placeholder="Título..." {...register('title')} className="title_input"/>
                    <p className="title_error">{errors.title?.message}</p>
                    <input placeholder="Edição..." {...register('edition')} className="edition_input" />
                    <p className="edition_error">{errors.edition?.message}</p>
                    <input placeholder="ISBN..." {...register('isbn')} className="isbn_input"/>
                    <p className="isbn_error">{errors.isbn?.message}</p>
                    <input placeholder="Editora..." {...register('publisher')} className="publisher_input"/>
                    <p className="publisher_error">{errors.publisher?.message}</p>
                    <TagInput className="tag_input_authors" register={register} data={"authors"} authors placeholder={"Autor..."}/>
                    <p className="authors_error">{errors.authors?.message}</p>
                    <TagInput className="tag_input_genres" register={register} data={"genres"} placeholder={"Gênero..."}/>
                    <p className="genres_error">{errors.genres?.message}</p>
                    <textarea placeholder="Sinopse..." {...register('synopsis')} className="synopsis_input"/>
                    <p className="synopsis_error">{errors.synopsis?.message}</p>
                    </ContainerInput>

                    <ButtonsContainer userFile={userFile}>
                    <label htmlFor="select-file"> <IoMdImage/> Adicionar imagem</label>
                    <span>{userFile.name}</span>
                    <input id="select-file" {...register('file')} type="file" onChange={(e) => handleFile(e.target)}/>
                    <button type="submit" className=""> Criar</button>
                    </ButtonsContainer>
                    </form>
                </Container>
            </Model>
            </>
    )
}