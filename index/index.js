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

var app8 = new Vue({
  el:"#app-8",
  data:{
    rawHtml:"<span style=\"color:red\">This should be red.</span>",
  }
})


var app9 = new Vue({
  el:'#app-9',
  data:{
    url:"index.js"
  }
})


var app10 = new Vue({
  el:"#app-10",
  data:{
    question: '',
    answer: '질문을 하기 전까지는 대답할 수 없습니다.'
  },
  watch:{
    question: function (newQuestion){
      this.answer = '입력을 기다리는 중...'
      this.debouncedGetAnswer()
    }
  },
  created: function(){
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function(){
      if (this.question.indexOf('?') === -1){
        this.answer = "질문에는 일반적으로 물음표가 포함됩니다. ;-)"
        return
      }
      this.answer = '생각중...'
      var vm = this
      axios.get('https://yesno.wtf/api')
      .then(function (response){
        vm.answer = _.capitalize(response.data.answer)
      })
      .catch(function (error){
        vm.answer = '에러! API 요청에 오류가 있습니다.' + error
      })
    }
  }
})

var app11 = new Vue({
  el:"#app-11",
  data:{
    awesome:false
  }
})
