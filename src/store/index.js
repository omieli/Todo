import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [

    ]
  },

  getters: {
  },
  mutations: {
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    finishTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate
    },
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    getTasks({ commit }) {
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks)
      })
    },
    clearAllTasks(state) {
      state.tasks = state.tasks.filter((task) => task !== task)
      }
    
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null     }
      db.collection('tasks').add(newTask).then(() => {
        commit('addTask', newTask)
      })
    },
    finishTask({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0]
      db.collection('tasks').doc({ id: id }).update({
        done: !task.done
      }).then(() => {
        commit('finishTask', id)
      })
      
    },
    deleteTask({ commit }, id) {
      db.collection('tasks').doc({ id: id }).delete().then(() => {
        commit('deleteTask', id)
      })
    },
    updateTaskTitle({ commit }, payload) {
      console.log(payload)
      db.collection('tasks').doc({ id: payload.id }).update({
        title: payload.title
      }).then(() => {
        commit('updateTaskTitle', payload)
      })
    },
    updateTaskDueDate({ commit }, payload) {

      db.collection('tasks').doc({ id: payload.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('updateTaskDueDate', payload)
      })
    },
    getTasks({ commit }) {
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks)
      })
    },
    clearAllTasks({ commit }) {
      db.collection('tasks').delete().then(() => {
        commit('clearAllTasks')
      })
    }
  }
}
)
