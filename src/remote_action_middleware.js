import objectAssign from 'object-assign';

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const clientId = store.getState().get('clientId');
    // TODO use rest object spread syntax, remove object-assign
    // TODO use eslint to remove all semicolons and fix all styles
    socket.emit('action', objectAssign({}, action, {clientId}));
  }
  return next(action);
}
