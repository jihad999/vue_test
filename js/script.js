new Vue(
    {
        el:'#div1',
        data: {
            message: 'Welcome to Vue js',
            name: 'Jihad',
            age: 22,
            skills: ['HTML','CSS','JS','PHP','MySQL'],
            today: 'Today',
            vext: 'vText',
            vtml: '<p class="vHTML"> vHTML</p>',
            bakkaheUrl: 'https://bakkah.net.sa/',
            bakkahImg: 'Profile-photo.png',
            num: 0,
            userName: '',

        },
        methods: {
            myName: function () {
                return (this.name.length >= 3 ? this.name : 'The name is Short');
            },
            newDate: function () {
                return (this.today = Date());
            },
            counter1: function(){
                return this.num++;
            },
            counter2: function(){
                return this.num--;
            }
        }
    }
)