import React from 'react';
import { useForm } from "react-hook-form";
import formulario from './estilos/formulario.css';

const Formulario = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset()
    }

    return(
        <div className="container">
            <h1>Formulario</h1>
            <form className="form-group" id="inputDefault" onSubmit={handleSubmit(onSubmit)}>
                <input     
                    name="nombre"
                    placeholder="nombre"
                    className="form-control informacion"
                    ref={
                        register({
                            required:{value: true, message: 'Nombre Obligtorio'},
                            maxLength:{value: 25, message: 'No más de 25 carácteres!'},
                            minLength:{value: 2, message: 'Mínimo 2 carácteres' }
                        })
                    }
                />
                
                <input     
                    name="apellido"
                    placeholder="apellido"
                    className="form-control informacion"
                    ref={
                        register({
                            required:{value: true, message: 'Apellido Obligtorio'},
                            maxLength:{value: 25, message: 'No más de 25 carácteres!'},
                            minLength:{value: 2, message: 'Mínimo 2 carácteres' }
                        })
                    }
                />                
                    <span className="text-danger text-small d-block mb-2">
                       <div className="span1">
                       {errors.nombre && "el nombre es requerido  "}
                       </div>
                       <div className="span1 span2">
                       {errors.apellido && " el apellido es requerido"}
                       </div>
                    </span>
                <input     
                    name="correo"
                    placeholder="correo"
                    className="form-control info correo"
                    ref={
                        register({
                            required:{value: true, message: 'correo Obligtorio'},
                            maxLength:{value: 25, message: 'No más de 25 carácteres!'},
                            minLength:{value: 2, message: 'Mínimo 2 carácteres' }
                        })
                    }
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.correo && "el correo es requerido"}
                </span>
                <input     
                    name="telefono"
                    placeholder="telefono"
                    className="form-control informacion"
                    ref={
                        register({
                            required:{value: true, message: 'telefono Obligtorio'},
                            maxLength:{value: 11, message: 'No más de 11 carácteres!'},
                            minLength:{value: 11, message: 'Mínimo 11 carácteres' }
                        })
                    }
                />
                <input     
                    name="dni"
                    placeholder="DNI"
                    className="form-control informacion"
                    ref={
                        register({
                            required:{value: true, message: 'DNI Obligtorio'},
                            maxLength:{value: 8, message: 'No más de 8 carácteres!'},
                            minLength:{value: 8, message: 'Mínimo 8 carácteres' }
                        })
                    }
                /> 
                    <span className="text-danger text-small d-block mb-2">
                       <div className="span1">
                          {errors.telefono && "el telefono es requerido"}
                       </div>
                       <div className="span1 span2">
                          {errors.dni && "el DNI es requerido"}
                       </div>
                    </span>
                <div className="form-group info2">
                    <textarea  placeholder="Mensaje" className="form-control" id="exampleTextarea" rows="3"
                    ref={
                        register({
                            required:{value: true, message: 'Mensaje Obligtorio'},
                            maxLength:{value: 250, message: 'No más de 250 carácteres!'},
                            minLength:{value: 8, message: 'Mínimo 8 carácteres' }
                        })
                    }>
                    </textarea>  
                </div>
                {errors.Mensaje && "el Mensaje es requerido"}

                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}


export default Formulario;