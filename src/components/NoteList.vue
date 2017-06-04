<template lang="html">
  <div class="notelist container-fluid">
    <toolbar> </toolbar><br>
    <div class="list-group">
      <a href="#" :class='{ active: note == currentNote }'@click="setCurrentNote(note)" class="list-group-item" v-for='note in notes'>{{note.name}}</a>
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'notes', 'currentNote'
    ])
  },
  methods: {
    ...mapActions([
      'setCurrentNote'
    ])
  },
  components: { Toolbar }
}
</script>

<style lang="css">
.notelist {
  margin-top: 40px;
  width: 20%;
}
</style>
