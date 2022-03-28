import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Wake up',
        done: false,
        dueDate: '2020-10-15'
      },
      {
        id: 2,
        title: 'Get bananas',
        done: false,
        dueDate: '2022-05-21'
      },
      {
        id: 3,
        title: 'Eat bananas',
        done: false,
        dueDate: null
      }
    ]
  },
  getters: {
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      };
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
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
    },
    updateTaskTitle({ commit }, payload) {
      commit('updateTaskTitle', payload)
    }
  },
  modules: {
  }
})
