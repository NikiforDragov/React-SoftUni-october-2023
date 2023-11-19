import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardExample() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src='holder.js/100px180' />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>state: </Card.Text>
                <Button variant='primary'>Change State</Button>
            </Card.Body>
        </Card>
    );
}
