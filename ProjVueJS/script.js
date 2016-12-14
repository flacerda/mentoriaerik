Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
}) 

var app = new Vue({
  el: '#app-7',
  data: {
    taskList: [
      { text: 'Task Um' },
      { text: 'Task 2' },
      { text: 'Other Task' }
    ],
    task_input: null
  },
  methods: {
  	addTask: function () {
  		this.taskList.push({ text: this.task_input})

  		return this.task_input = null;
  	}
  }
})