import {Form} from './style'
import {Input} from '../../Components/Input/index'
import {Button} from '../../Components/Button/index'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../Service/index'
import { toast } from 'react-toastify'


export const FormSignup = ({history}) => {

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório*"),
        email: yup.string().required("Email obrigatório*").email("Email inválido*"),
        password: yup.string().required("Senha obrigatória*").min(6, "Senha fraca*"),
        confirm_password: yup.string().required("Confrime sua senha*").oneOf([yup.ref("password"), null], "Senhas diferentes*")
    });

    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    function handleSignup(data){
        const {name, email, password} = data;

        api.post("/user", data)
        .then((response) => {
            console.log(response)
            toast.success("Usuário criado");

            history.push("/Entrar");
        })
        .catch((err) => toast.error("Erro ao criar usuário"))
    };

    return(
        <>
        <Form onSubmit={handleSubmit(handleSignup)}>
            <Input label="Nome:" placeholder="Digite seu nome" type="text" register={register} data="name" error={errors.name?.message}/>
            <Input label="Email:" placeholder="Digite seu email" type="text" register={register} data="email" error={errors.email?.message}/>
            <Input label="Senha:" placeholder="Digite sua senha" type="password" register={register} data="password" error={errors.password?.message}/>
            <Input label="Confirme sua senha:" placeholder="Confirme sua senha" type="password" register={register} data="confirm_password" error={errors.confirm_password?.message}/>
            <Button text='Cadastrar'/>
        </Form>
        </>
    )
}