import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import TodoList from "./components/TodoList.js"
import { Constants } from 'expo';
import { StackNavigator } from "react-navigation" ;

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json
import AddTodo from "./components/AddTodo.js"
import TodoList from "./components/TodoList.js"

const App =StackNavigator(
  {
    AddTodo:{
      screen:AddTodo,
    },
    TodoList:{
      screen:TodoList
    }
  },
    {
    initialRouteName:"TodoList"
    }
)

export default App
