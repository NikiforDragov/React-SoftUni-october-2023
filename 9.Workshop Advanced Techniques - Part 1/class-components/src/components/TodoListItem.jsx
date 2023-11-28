import { Component } from 'react';
import { Card} from 'antd';

export default class TodoListItem extends Component {
    render() {
        return (
            <>
                <Card
                    title={this.props.label}
                    extra={<a href='#'>More</a>}
                    style={{
                        width: 300,
                    }}
                >
                    <p>{this.props.isCompeted ? 'Completed' : 'Pending'}</p>
                </Card>
            </>
        );
    }
}
