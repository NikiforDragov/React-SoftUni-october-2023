import { Form, Button } from 'react-bootstrap';

export default function AddTodo() {
    const [formValue, setFormValue] = useState()

    return (
        <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                <Form.Label>Todo Title</Form.Label>
                <Form.Control type='text'/>
            </Form.Group>
            <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
            >
                <Form.Label>State</Form.Label>
                <Form.Control type='text' />
            </Form.Group>
            <Button variant='primary'>Submit</Button>
        </Form>
    );
}
