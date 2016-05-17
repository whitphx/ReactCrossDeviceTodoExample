import React from 'react'
import {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: 38
  }
})

export default class extends Component {
  constructor(props) {
    super(props)

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      ds: ds.cloneWithRows(props.todos || []),
      addTodoText: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todos !== this.props.todos) {
      this.setState({
        ds: this.state.ds.cloneWithRows(nextProps.todos || [])
      })
    }
  }

  render() {
    const {
      addTodo,
    } = this.props

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.ds}
          renderRow={(rowData) => <Text>{ rowData.text }</Text>}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={addTodoText => this.setState({addTodoText})}
          value={this.state.addTodoText}
        />
        <Text onPress={() => {
          addTodo(this.state.addTodoText)
          this.setState({addTodoText: ''})
        }}>ADD</Text>
      </View>
    )
  }
}
