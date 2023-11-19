import { useState } from "react";

export default function useForm(initValue, onSubmitHandler) {
    const [formValue, setFormValue] = useState(initValue);
    
    const changeHandler = (e) => {
        setFormValue((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit= (e) => {
        e.preventDefault();
        if(onSubmitHandler){
            onSubmitHandler(formValue)
        }
    }

    return {
        formValue,
        changeHandler,
        onSubmit,
    }
}
