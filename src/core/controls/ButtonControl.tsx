import { useReducer, useState } from 'react';
import { ButtonTypes } from '../../type/abstraction/ButtonTypes';
import { forTheStart } from '../../state/initializer/init';

type completeStructure = {
    type: 'increment' | 'decrement',
    payload: number   
}

type partialStructure = {
    type: 'reset'
}

type ActionPayload = partialStructure | completeStructure

type ReducerState = {
    count: number
}

function reducer(state: ReducerState, action: ActionPayload)
{
    switch(action.type)
    {
        case 'increment':
            return {
                count: state.count + action.payload
            }
        case 'decrement':
            return {    
                count: state.count - action.payload
            }
        case 'reset':
            return {
                count: 0
            }
        default:
            return state
    }
}

const initializeState = { count: 0 }

export const ButtonControl = (props: ButtonTypes) =>
{
    const [state, dispatch] = useReducer(reducer, forTheStart)

    return (
        <>
            <button onClick={(event) => props.handleClick(event, 23)}>Call Me</button>
            <div style={{padding: "20px"}}></div>
             Count: { state.count }
            <button onClick={() => dispatch({ type: "increment", payload: 5 })}>SELL</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>BUY</button>
            <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
        </>
    )
}