import React from 'react';
import { get } from 'lodash';

function Task(props) {

    const title = get(props, 'task.title', '')
    const priority = get(props, 'task.title', '');

    return (
    <div>
        Task
        {title}
        {props.task.priority}
    </div>
  );
}

export default Task;
