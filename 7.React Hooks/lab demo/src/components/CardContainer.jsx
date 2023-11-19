import AddTodo from './AddTodo';
import ToDoCard from './ToDoCard';

export default function CardContainer({ todos }) {
    return (
        <div
            style={{ margin: '20px', display: 'flex', flexDirection: 'column' }}
        >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {todos.map((item) => (
                    <ToDoCard key={item._id} {...item} />
                ))}
            </div>
            <div style={{ display: 'block' }}>
                <AddTodo />
            </div>
        </div>
    );
}
