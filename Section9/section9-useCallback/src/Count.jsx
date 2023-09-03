import React from 'react';

const Count = ({data}) => {
    
    const {value, btnColor } = data

    return (
        <div>
            <h1>Progression: {value} %</h1>
            <div className ="box">
                <div style ={{backgroundColor:`${btnColor}`, width: `${value}%`}} className ="bar"></div>
            </div>
        </div>
    );
};

export default Count;