// type | interface | class

class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        // it's not perfdect for id but it is good enough for this example
        this.id = new Date().toISOString();
    }
}

export default Todo;
