
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header.js'
import TodoItem from './components/todoItem.js';
import AddTodo from './components/addTodo.js'
export default function App() {
  const [todos,setTodos]=useState([
    {text:'Buy coffee',key:'1'},
    {text:'Create an app',key:'2'},
    {text:'Play on the switch',key:'3'}
  ]);
  const preesHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=> todo.key!=key);
    });
  }
  const submtiHandler=(text)=>{
    setTodos((prevTodos)=>{
      return[
        {text:text,key:Math.random().toString()},
        ...prevTodos
      ]
    })
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submtiHandler={submtiHandler}/>
        <View style={styles.list}>
          <FlatList
          
          data={todos}
          renderItem={({item})=>(
            <TodoItem item={item} preesHandler={preesHandler}/>
          )}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,

  },
  list:{
    marginTop:20,
  }
});
