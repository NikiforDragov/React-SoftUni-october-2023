import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddTodo() {
    const [formValue, setFormValue] = useState([]);

    const onChangeHandler = (e) => {
        setFormValue((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                <Form.Label>Todo Title</Form.Label>
                <Form.Control
                    type='text'
                    name='title'
                    value={formValue.name}
                    onChange={onChangeHandler}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    );
}
