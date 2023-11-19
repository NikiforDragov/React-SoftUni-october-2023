import ToDoCard from './ToDoCard';

export default function CardContainer({ todos }) {
    return (
        <div style={{ margin: '20px' }}>
            {todos.map((item) => (
                <ToDoCard key={item._id} {...item} />
            ))}
        </div>
    );
}
