import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';


const Form2 = () => {

    const [nombre, setNombre] = useState('s');
    
    const { register, formState: { errors }, watch, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }
    
    const registrarTelefono = watch('registrarTelefono');

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        console.log(`Nombre ${nombre}`);
    }, [nombre] );

    return <div>
        <h2>Contáctenos2</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>   
                <label>Nombre</label>
                <input type="text" placeholder="Su nombre" 
                onChange={(e)=>setNombre(e.target.value)} {...register('nombre', {
                    required: true,
                    maxLength: 10
                })}/>
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre no puede exceder los 10 caracteres.</p>}
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" placeholder="Su apellido" {...register('apellido', {
                    required: true
                })}/>
                {errors.apellido?.type === 'required' && <p>El campo apellido es requerido</p>}
            </div>
            <div>
                <label>País</label>
                <select name="" id="" {...register('pais')}>
                    <option value="es">España</option>
                    <option value="fr">Francia</option>
                    <option value="it">Italia</option>
                </select>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="" placeholder="ejemplo@mail.com" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El email no es válido</p>}
            </div>
            <div>
                <label>¿Desea ser contactado por teléfono?</label>
                <input type="checkbox" {...register('registrarTelefono')} />
            </div>
            {registrarTelefono && (
                <div>
                    <label>Teléfono</label>
                    <input type="text" {...register('telefono')} />
                </div>
            )}
            <input type="submit" value="Enviar"/>
        </form>
    </div>
}

export default Form2;