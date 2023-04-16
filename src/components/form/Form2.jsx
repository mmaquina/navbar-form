import { useForm } from "react-hook-form";

const Form2 = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return <div>
        <h2>Contáctenos2</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>   
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })}/>
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" name="" {...register('Apellido', {
                    required: true
                })}/>
            </div>
            <div>
                <label>País</label>
                <select name="" id="" {...register('Pais')}>
                    <option value="es">España</option>
                    <option value="fr">Francia</option>
                    <option value="it">Italia</option>
                </select>
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
}

export default Form2;