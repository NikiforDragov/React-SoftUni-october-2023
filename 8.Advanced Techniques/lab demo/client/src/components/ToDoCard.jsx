import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ToDoCard({ _id, title, isFinish }) {
    return (
        <Card style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    state: {isFinish === 'false' ? 'In Progress' : 'Done'}
                </Card.Text>
                <Button variant='primary'>Change State</Button>
            </Card.Body>
        </Card>
    );
}
