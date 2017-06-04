<template>
  <div id="app">
      <note-list></note-list>
      <editor></editor>
  </div>
</template>

<script>
import NoteList from '@/components/NoteList'
import Editor from '@/components/Editor'

export default {
  name: 'app',
  components: {
    NoteList,
    Editor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
