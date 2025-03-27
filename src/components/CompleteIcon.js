import React from 'react'
import { TodoIcon } from '../components/TodoIcon'

function CompleteIcon ({completed}) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? "green" : "gray"}
        />
    );
}

export { CompleteIcon }
