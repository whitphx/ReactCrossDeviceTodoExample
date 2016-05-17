import React from 'react'

import {
  Provider,
} from 'react-redux'

import configureStore from '../../store/configureStore'

const store = configureStore()

import TodoApp from '../containers/TodoApp.react'

export default React.createClass({
  render() {
    return (
      <Provider store={store} >
        <TodoApp />
      </Provider>
    )
  }
})
