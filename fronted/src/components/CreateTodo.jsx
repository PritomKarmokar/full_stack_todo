export function CreateTodo() {
    return <div>
        <input
            style={{
                padding: 5,
                margin: 5
            }}
            type="text" placeholder="title"></input><br></br>
        <input style={{
            padding: 5,
            margin: 5
        }} type="text" placeholder="description"></input> <br></br>

        <button style={{
            padding: 5,
            margin: 5
        }}>Add a todo</button>
    </div>
}
