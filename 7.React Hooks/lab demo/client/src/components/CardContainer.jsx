import AddTodo from './AddTodo';
import ToDoCard from './ToDoCard';

export default function CardContainer({ todos, onSubmitHandler }) {
    return (
        <div
            style={{ margin: '20px', display: 'flex', flexDirection: 'column' }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {todos.map((item) => (
                    <ToDoCard key={item._id} {...item} />
                ))}
            </div>
            <div>
                <AddTodo style={{ display: 'block' }} />
            </div>
        </div>
    );
}
