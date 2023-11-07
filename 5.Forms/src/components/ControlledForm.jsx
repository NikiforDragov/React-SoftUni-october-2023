import { useState } from 'react';

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'Male',
    swimming: false,
    football: false,
    kickboxing: false,
};

export default function ControlledForm() {
    const [formValues, setFormValues] = useState(formInitialState);

    const changeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onCheckboxChange = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.checked,
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
                    <select name='gender' id='gender' onChange={changeHandler} value={formValues.gender}>
                        <option
                            value='Male'
                        >
                            Male
                        </option>
                        <option
                            value='Female'
                        >
                            Female
                        </option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>

                    <label htmlFor='swimming'>Swimming</label>
                    <input
                        type='checkbox'
                        name='swimming'
                        id='swimming'
                        checked={formValues.swimming}
                        onChange={onCheckboxChange}
                    />

                    <label htmlFor='football'>Football</label>
                    <input
                        type='checkbox'
                        name='football'
                        id='football'
                        checked={formValues.football}
                        onChange={onCheckboxChange}
                    />

                    <label htmlFor='kickboxing'>Kickboxing</label>
                    <input
                        type='checkbox'
                        name='kickboxing'
                        id='kickboxing'
                        checked={formValues.kickboxing}
                        onChange={onCheckboxChange}
                    />
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
