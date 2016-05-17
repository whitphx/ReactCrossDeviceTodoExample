import {
  ADD_TODO,
} from '../../actions'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]

    default:
      return state
  }
}
