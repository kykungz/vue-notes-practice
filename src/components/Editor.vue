<template lang="html">
  <div class="editor">
    <textarea :disabled="isNotSelected" :value="currentNote.content" @input="updateContent" style="height:600px" class="form-control"></textarea>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'currentNote', 'isNotSelected'
    ])
  },
  methods: {
    ...mapActions([
      'updateContent'
    ])
  }
}
</script>

<style lang="css">
.editor {
  margin-top: 40px;
  margin-right: 40px;
  width: 100%;
  height: 100%;
}
</style>
