
export default function UncontrolledForm() {
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return(
        <>
            <h1>Uncontrolled form</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" id="age" />
                </div>
                <div>
                    <input type="submit" value='Register' />
                </div>
            </form>
        </>
    );
}