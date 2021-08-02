const App = {
  data() {
    return {
      placeholderString: 'your task',
      title: 'To-do List',
      inputValue: '',
      notes: ['First task', 'second']
    }
  },
  methods: {
    // inputChangeHandler(ev) {
    //   this.inputValue = ev.target.value
    // },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
      
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    deleteNote(idx, event) {
      this.notes.splice(idx, 1);
    }, 

    // нам не нужно создавать такой метод, для этого у ВЬЮ есть специальные типы событий.- v-on:keypress.enter="addNewNote"
    // inputKeyPress(ev) {
    //   if (ev.key === 'Enter') {
    //     this.addNewNote()
    //   }
    // }
  },
  // computed : {

  // }, 
  watch: {
    inputValue(val) {
      if (val.length > 30) {
        this.inputValue = ''
      }
    }
  }
}


Vue.createApp(App).mount('#app')