import { Form, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm';

export default function AddTodo(props) {
    const { formValue, changeHandler, onSubmit } = useForm(
        { title: '' },
        props.onSubmitHandler
    );

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                <Form.Label>Todo Title</Form.Label>
                <Form.Control
                    type='text'
                    name='title'
                    value={formValue.name}
                    onChange={changeHandler}
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
    );
}
