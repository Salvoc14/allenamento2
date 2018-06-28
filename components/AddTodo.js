import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import { Card } from 'react-native-elements';

export default class AddTodo extends Component {
  state = {
    text: null,
    currentTodo: null,
  };
  componentWillMount() {
    const currentTodo = this.props.navigation.state.params.currentTodo;
    {
      currentTodo
        ? (this.setState({ currentTodo: currentTodo }),
          this.setState({ text: currentTodo.text }))
        : null;
    }
  }
  render() {
    return (
      <Card>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text =>this.setState({ text })}
          value={this.state.text}
        />
        {this.state.currentTodo ? (
          <Button
            title="Save"
            onPress={() => {
              let newtodo={
                text:this.state.text,
                done:this.state.currentTodo.done,
                id:this.state.currentTodo.id
              }
              this.props.navigation.state.params.onAdd(newtodo),
                this.props.navigation.goBack();
            }}
          />
        ) : (
          <Button
            title="Add"
            onPress={() => {
              this.props.navigation.state.params.onAdd(this.state.text),
                this.props.navigation.goBack();
            }}
          />
        )}
      </Card>
    );
  }
}
