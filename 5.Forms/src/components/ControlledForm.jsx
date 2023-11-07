import { useState } from 'react';

export default function ControlledForm() {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [ageValue, setAgeValue] = useState(0);

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setAgeValue(Number(e.target.value));
    };

    const resetFormHandler = () => {
        setUsernameValue('');
        setPasswordValue('');
        setAgeValue(0);
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
                        value={usernameValue}
                        onChange={usernameChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={passwordValue}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input
                        type='number'
                        name='age'
                        id='age'
                        value={ageValue}
                        onChange={ageChangeHandler}
                    />
                </div>
                <div>
                    <button>Register</button>
                    <button type='button' onClick={resetFormHandler}>
                        Reset
                    </button>
                </div>
            </form>
        </>
    );
}
