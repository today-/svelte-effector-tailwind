import {createEvent, createStore} from 'effector';

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const addTodo = createEvent();
export const remove = createEvent();
export const clearCompleted = createEvent();

export const todos = createStore([])
  .on(addTodo, (items, description) => items.concat({
    id: uuid(),
    description,
    completed: false
  }))
  .on(remove, (items, index) =>
    items.slice(0, index).concat(items.slice(index + 1))
  ).on(clearCompleted, (items) =>
    items.filter(item => !item.completed)
  );
