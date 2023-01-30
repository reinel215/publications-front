
interface ValidationRegisterParams {
    name?: string;
    required?: boolean,
    minLength?: number,
    maxLength?: number,
}

const validationRegister = ({ name = "", required = false, minLength = 0, maxLength = 0 }: ValidationRegisterParams) => {


    let register = {};

    if (required) {
        register = {
            ...register,
            required: `El campo ${name} no puede estar vacio`
        }
    }


    if (minLength) {
        register = {
            ...register,
            minLength: {
                value: minLength,
                message: `Este campo no puede tener menos de ${minLength} carácteres`
            }
        }
    }


    if (maxLength) {
        register = {
            ...register,
            maxLength: {
                value: maxLength,
                message: `Este campo no puede tener más de ${maxLength} carácteres`
            }
        }
    }

    return register;
}




export default validationRegister;