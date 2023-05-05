import { useState } from "react";

 export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onResetForm = () =>{
        setFormState(initialForm);
    }

    const onChangeValue = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

   return {
    ...formState,
    formState,
    onChangeValue,
    onResetForm
   }
 }
 