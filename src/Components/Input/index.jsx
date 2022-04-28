import { Label, Error, InputCustumer } from "./style"

export const Input = ({label, placeholder, type, error, register, data }) =>{
    return(
        <>
        <Label>{label}</Label>
        <InputCustumer type={type} placeholder={placeholder} {...register(data)}/>
        <Error>{error}</Error>
        </>
    )
}