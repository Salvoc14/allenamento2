import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import Todo from './todo.js';
import { Constants } from 'expo';

const todolist = [
  { text: 'Buy the milk', done: false },
  { text: 'Submit the app', done: false },
  { text: 'Write an article', done: true },
  { text: 'Walk the dog', done: false },
  { text: 'Go shopping on Amazon', done: false },
  { text: 'Wash the dish', done: false },
  { text: 'Call Steve', done: false },
  { text: 'Call Ray', done: false },
  { text: 'Buy a present to Antonio', done: true },
];

export default class TodoList extends Component {
  state = {
    todolist: todolist,
  };
  renderRow = ({ item }) => (
    <TouchableOpacity>
      <Todo
        data={item}
        onToggle={() => this._toggle(item)}
        onModify={() => this._edit(item)}
      />
    </TouchableOpacity>
  );
  _keyExtractor = (item, index) => {
    // aggiungere un id ad ogni elemento pari alla sua posizione
    item.id = index;
    return String(index);
  };

  _edit = item => {
    this.props.navigation.navigate('AddTodo', {
      currentTodo: item,
      onAdd: this._save,
    });
  };
  _modify = () => {
    this.props.navigation.navigate('AddTodo', {
      onAdd: this._add,
    });
  };

  _save=item=> {
    console.log(item)
 let newTodoList = this.state.todolist.map(value => 
      (value.id == item.id ?  {...value,text:item.text} : value)
    );
    console.log(newTodoList)
    this.setState({todolist:newTodoList})
  }
  _toggle = item => {
    let newTodoList = this.state.todolist.map(
      value => (value == item ? { ...value, done: !value.done } : value)
    );
    this.setState({ todolist: newTodoList });
  };

  _add = text => {
    let newTodo = {
      text: text,
      done: false,
    };
    let newTodolist = [...this.state.todolist, newTodo];
    console.log(newTodolist), this.setState({ todolist: newTodolist });
    console.log(this.state.todolist);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          data={this.state.todolist}
          renderItem={this.renderRow}
          keyExtractor={this._keyExtractor}
        />
        <Button title="ADD" onPress={this._modify} />
      </View>
    );
  }
}
