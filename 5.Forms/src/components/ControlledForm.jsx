import { useState } from 'react';

export default function ControlledForm() {
    const [usernameValue, setUsernameValue] = useState('Ivo');

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
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
                    <input type='password' name='password' id='password' />
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input type='number' name='age' id='age' />
                </div>
                <div>
                    <input type='submit' value='Register' />
                </div>
            </form>
        </>
    );
}
