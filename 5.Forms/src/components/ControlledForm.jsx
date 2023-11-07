import { useState } from 'react';

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'Male',
};

export default function ControlledForm() {
    const [formValues, setFormValues] = useState(formInitialState);

    const changeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
    };

    const submitHandler = () => {
        console.log(formValues);
        resetFormHandler();
    };

    return (
        <>
            <h1>Controlled form</h1>

            <form>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input
                        type='number'
                        name='age'
                        id='age'
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor='gender'>Gender:</label>
                    <select name='gender' id='gender' onChange={changeHandler}>
                        <option value='Male' selected={formValues.gender === 'Male'}>Male</option>
                        <option value='Female' selected={formValues.gender === 'Female'}>Female</option>
                    </select>
                </div>

                <div>
                    <button type='button' onClick={submitHandler}>
                        Register
                    </button>
                    <button type='button' onClick={resetFormHandler}>
                        Reset
                    </button>
                </div>
            </form>
        </>
    );
}
