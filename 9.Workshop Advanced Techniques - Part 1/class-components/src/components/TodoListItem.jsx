import { Component } from 'react';
import { Button, Card } from 'antd';

export default class TodoListItem extends Component {
    componentDidUpdate() {
        console.log(`${this.props.label} - Did Update`);
    }
    render() {
        return (
            <>
                <Card
                    title={this.props.label}
                    style={{
                        width: 300,
                        backgroundColor: this.props.isCompleted
                            ? 'red'
                            : 'green',
                    }}
                >
                    <Button
                        type='primary'
                        onClick={() => this.props.toggleTodo(this.props.id)}>
                        {this.props.isCompleted ? 'Undo' : 'Done'}
                    </Button>
                    <Button
                        type='primary'
                        danger
                        onClick={() => this.props.deleteTodo(this.props.id)}>
                        Remove
                    </Button>
                </Card>
            </>
        );
    }
}
