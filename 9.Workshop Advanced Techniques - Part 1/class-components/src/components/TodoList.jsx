import { Component } from 'react';
import TodoListItem from './TodoListItem';
import { Space } from 'antd';

export default class TodoList extends Component {
    render() {
        console.log(this.props.todos);
        return (
            <>
                <Space direction='vertical' size={16}>
                    {this.props.todos.map((todo) => (
                        <TodoListItem key={todo.id} {...todo} />
                    ))}
                </Space>
            </>
        );
    }
}
