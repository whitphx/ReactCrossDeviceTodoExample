import { connect } from 'react-redux'
import {
  addTodo,
} from '../actions'

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => dispatch(addTodo(text))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
