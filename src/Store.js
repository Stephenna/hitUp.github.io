import React, { Component } from 'react';
import io from 'socket.io-client'
export const CTX = React.createContext();

const initState = {
    general: [
      {from: 'Stephenna', msg: 'Hey'},
      {from: 'Brittany', msg: 'Hey'},
      {from: 'Maxx', msg: 'Hey'},
    ],
    topic2: [
      {from: 'Stephenna', msg: 'Hey'},
      {from: 'Stephenna', msg: 'Hey'},
      {from: 'Stephenna', msg: 'Hey'},
    ]
}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]:[
                    ...state[topic],
                    {
                        from, msg}
                ]
            }
            default:
                return state;
    }
}

let socket;

export default function Store(props) {
   
    if (!socket) {
        socket = io(':3001')
    }

   const [allChats] = React.useReducer(reducer, initState) 

    return (
        <CTX.Provider value={{allChats}}>
            {props.children}
        </CTX.Provider>
    );
}