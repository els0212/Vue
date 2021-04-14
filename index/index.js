var app = new Vue({
  el: '#app',
  data: {
    message: 'before changed'
  }
  })

  app.message = "hello vue.js!";

var app2 = new Vue({
  el: '#app-2',
  data:{
    message: '이 페이지는 ' + new Date()+'에 로드 되었습니다.'
  }
})
app2.message = "변경해 보았습니다.";

var app3 = new Vue({
  el:"#app-3",
  data:{
    seen: true
  }
})
app3.seen = false


var app4 = new Vue({
  el:"#app-4",
  data:{
    todos: [
      {text: 'learn javascript'},
      {text: 'learn Vue'},
      {text: 'make something good'}
    ]
  }
})
app4.todos.push({text: "learn Java"});

var app5 = new Vue({
  el:"#app-5",
  data:{
    message: '안녕하세요! Vue.js!'
  },
  methods:{
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el:"#app-6",
  data:{
    message: '안녕하세요 Vue!'
  }
})


Vue.component('todo-item',{
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
  el:"#app-7",
  data:{
    groceryList:[
      {id: 0, text:'vegetables'},
      {id: 1, text: 'cheese'},
      {id: 2, text: 'Whatever else humans are supposed to eat'}
    ]
  }
})
