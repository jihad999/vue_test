Vue.component('first-component',{
    data: function() {
        return{
            counter: 0,
            name: 'Jihad',
        }
    },
    props: ['first', 'age'],
    methods: {
        increase: function () {
            return (this.counter ++);
        },
        decrease: function () {
            return (this.counter --);
        }
    },
    computed: {
        calcAge: function () {
             return (age * 2);
        }
     },
    template: '<h1>first name is: {{ first }}</h1>'
})

Vue.component('seconed-component',{
    props: ['age'],
    computed: {
        calcAge: function () {
             return (age * 2);
        }
     },
    template: '<h3>The age is: {{ age }} </h3>'
})

Vue.component('convert',{
    data: function() {
        return {
            usd: 0,
            shekel: 0,
        }
    },
    computed:{
        validateUSD: function(){
            if(!isNaN(this.usd)){
               return this.usd ;
           }else{
               return 'The USD is not Number';
           }
        },
        validateSHEKEL: function(){
            if(!isNaN(this.shekel)){
               return this.shekel ;
           }else{
               return 'The SHEKEL is not Number';
           }
        }
    },
    watch: {
        shekel: function (x) {
             this.usd =  x * 3.3;
        },
        usd: function (x) {
             this.shekel =  x / 3.3;
       }
     },
    template: '<form action="" method="GET"><label>USD</label><input type="text" v-model="shekel" /><p>To</p><label>SHEKEL</label><input type="text" v-model="usd" /></form>    '
})

Vue.component('conv-time',{
    data: function() {
        return {
            hour: 0,
            minute: 0,
            secondes: 0,
        }
    },
    watch: {
        hour: function (x) {
            this.minute =  x * 60;
            this.secondes = x * 3600;
        },
        minute: function (x) {
            this.secondes =  x * 60;
            this.hour = x / 60;
       },
       secondes: function (x) {
            this.minute =  x / 60;
            this.hour = x / 3600;
        },
     },
    template: '<form action="" method="GET"> <label>Hour</label><input type="text" v-model="hour" /> <label>Minute</label><input type="text" v-model="minute" /> <label>Secondes</label><input type="text" v-model="secondes" /> </form>'
})

var local1 = {
    template: '<h3> Local1 </h3>'
}
var local2 = {
    template: '<h3> Local2 </h3>'
}

new Vue({
     el: '#app',
     data: {
        age: 20,
        users: [ 
            {first: 'Mohammed', last: 'Ahmed' },
            {first: 'Mazen', last: 'Ali' },
            {first: 'Khaled', last: 'Ibraheim' },
        ],
        findLanguage: '',
        languages: ['java', 'c#', 'c++', 'javascript', 'php', 'python', 'asp.net', 'html', 'css'],
        username: '',
     },
     components: {
        'local1': local1,
        'local2': local2,
     },
     computed:{
         filterLanguage: function(){
            //  console.log('aaaaaaaa');
            var filtering = new RegExp(this.findLanguage, 'i');
            return this.languages.filter(function (el) {
                return el.match(filtering);
            });
         },
         validation: function(){
             if(!this.username){
                return 'The username is Empty' ;
             }else if(this.username.length <= 6){
                return 'The username is short' ;
             }else if(!isNaN(this.username)){
                return 'The username is just number' ;
            }else{
                return ('The username is:' + this.username) ;
            }
         }
     },
 })
