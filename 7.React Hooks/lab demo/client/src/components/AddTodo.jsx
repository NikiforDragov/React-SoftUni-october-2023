import { Form, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function AddTodo() {
    const { onSubmitHandler } = useContext(TodoContext);
    const { formValue, changeHandler, onSubmit } = useForm(
        { title: '' },
        onSubmitHandler
    );

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                <Form.Label>Todo Title</Form.Label>
                <Form.Control
                    type='text'
                    name='title'
                    value={formValue.title}
                    onChange={changeHandler}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    );
}
