import React from 'react';

const Buttons = ({newUser, resetUser, prevUser}) => {

    return (
        <div>
            <button onClick = {newUser} className = "buttons">Next User</button>
            <button onClick = {resetUser} className = "buttons">Reset</button>
            <button onClick = {prevUser} className = "buttons">Prev User</button>
        </div>
    );
};

export default Buttons;