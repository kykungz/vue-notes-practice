import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

function Note (name) {
  this.name = name
  this.content = ''
}

const store = new Vuex.Store({
  state: {
    notes: [],
    currentNote: {}
  },
  mutations: {
    SET_CURRENT_NOTE (state, note) {
      state.currentNote = note
    },
    ADD_NOTE (state, name) {
      state.notes.push(new Note(name))
    },
    UPDATE_CONTENT (state, content) {
      state.currentNote.content = content
    },
    REMOVE_NOTE (state) {
      var index = state.notes.indexOf(state.currentNote)
      state.notes.splice(index, 1)
      state.currentNote = {}
    }
  },
  getters: {
    notes: state => state.notes,
    currentNote: state => state.currentNote,
    isNotSelected: state => Object.keys(state.currentNote).length === 0
  },
  actions: {
    setCurrentNote (context, note) {
      context.commit('SET_CURRENT_NOTE', note)
    },
    addNote (context, name) {
      context.commit('ADD_NOTE', name)
    },
    updateContent (context, e) {
      context.commit('UPDATE_CONTENT', e.target.value)
    },
    removeNote (context) {
      context.commit('REMOVE_NOTE')
    }
  }
})

export default store
