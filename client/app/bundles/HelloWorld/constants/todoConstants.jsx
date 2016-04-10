import mirrorCreator from 'mirror-creator'

const actionTypes = mirrorCreator([
  'ADD_TODO',
  'SET_VISIBILITY_FILTER',
  'TOGGLE_TODO',
])

export default actionTypes