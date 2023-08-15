import { useReducer } from 'react'
import'./ReducerDemo.css'

type State = {
    count: number
}

type Action = 'increment' | 'decrement'

function reducer(currentState: State, action: Action) {
    switch(action) {
        case 'increment':
            return {count: currentState.count + 1}
        case 'decrement':
            return {count: currentState.count - 1}
        default:
            return currentState
    }
}

export default function ReducerDemo() {

    let [state, dispatcher] = useReducer(reducer, {count: 0})

    function decrementHandler() {
        dispatcher('decrement')
    }

    function incrementHandler() {
        dispatcher('increment')
    }
    return (
        <>
            <h3>Here we are using reducer to update the state of count.</h3>
            <div className="container">
                <button onClick={decrementHandler}> - </button>
                <span>{state.count}</span>
                <button onClick={incrementHandler}> + </button>
            </div>
        </>
    )
}