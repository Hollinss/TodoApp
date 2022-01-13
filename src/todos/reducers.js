import { CREATE_TODO, REMOVE_TODO} from "./actions.js";

export const todos = (state=[], action) => {
    const { type, payload } = action;
    // create and remove todo are "actions" from the actions.js file which have both type and payload attributes

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo)
            //state is an array of our current todos
            //so we are simply adding this new state using concat (which returns a new array)
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter( todo => todo.text !== text);
        }
        default:
            return state; //returning updated state
    }
}

/**
 * A "reducer" is a function named after whatever action from the redux store it manages. Two arguments: current state of the component and the action that was triggered (with type and payload)
 */