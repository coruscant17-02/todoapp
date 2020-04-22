import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

Vue.user(Router)

export default new Router({
    node:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
            component:TodoList
        },
        {
            path:'/todos/add',
            component:TodoForm
        }
    ]
})