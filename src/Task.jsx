import React from 'react';

const Task = ({ task, canGoRight = true, canGoLeft = true, handleArrowClickRight, handleArrowClickLeft }) => {
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <button disabled={!canGoLeft} onClick={handleArrowClickLeft}>
                {'<'}
            </button>
            {task}
            <button disabled={!canGoRight} onClick={handleArrowClickRight}>
                {'>'}
            </button>
        </div>
    );
};

export default Task;
