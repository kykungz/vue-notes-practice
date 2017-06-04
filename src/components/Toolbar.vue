<template lang="html">
  <div class="toolbar">
    <div class="btn-group btn-group-sm">
      <button @click='askName' type="button" class="btn btn-primary">
        Add
      </button>
      <button @click="removeNote" :disabled="isNotSelected" type="button" class="btn btn-danger">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'currentNote', 'isNotSelected'
    ])
  },
  methods: {
    ...mapActions([
      'addNote', 'removeNote'
    ]),
    askName () {
      var name = prompt('Note name:')
      if (name) {
        this.addNote(name)
      }
    }
  }
}
</script>

<style lang="css">
.toolbar {
}
</style>
