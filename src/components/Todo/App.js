import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/Todo/AddTodo'
import VisibleTodoList from '../../containers/Todo/VisibleTodoList'
import Navbar from '../Navbar'

const App = () => (
  <div>
    <Navbar/>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
