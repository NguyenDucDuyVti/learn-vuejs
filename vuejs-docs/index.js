var app = new Vue({
    el: '#app',
    data: {
        message: 'Do you wanna build a Vue app?'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Bạn đã mở trang này vào ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
        { text: 'Học JavaScript' },
        { text: 'Học Vue' },
        { text: 'Xây dựng cái gì đó hay ho' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'qua lại khách chờ sông lặng sóng'
    },
    methods: {
        reverseMessage: function () {
        this.message = this.message.split(' ').reverse().join(' ')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hãy sửa thông điệp này'
    }
})

// Định nghĩa một component todo-item
Vue.component('todo-item', {
    template: '<li>Đây là một đề mục todo</li>'
})
