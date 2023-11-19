import ToDoCard from './ToDoCard';

export default function CardContainer({ todos }) {
    return (
        <div style={{ margin: '20px', display: 'flex', flexDirection: 'row' }}>
            {todos.map((item) => (
                <ToDoCard key={item._id} {...item} />
            ))}
        </div>
    );
}
