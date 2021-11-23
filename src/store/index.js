import {createStore} from 'vuex'

export default createStore({
    state:{
        proyectos:[
            // {id:0,
            // title: 'Gestionamiento de nóminas',
            // image: require('@/img/fondo.jpg'),
            // date: '1/1/2021',
            // description:'holaaa',
            // keywords:['vue', 'javascript', 'html', 'css'],
            // link:'google.com'},
            // {
            //     id:1,
            // title: 'Proyecto 2',
            // image:require('@/img/fondo.jpg'),
            // date: '1/1/2020',
            // description:'Lorem Ipsum bla bla bla bla bla',
            // keywords:['vue', 'javascript', 'html', 'css'],
            // link:'google.com'
            // },
            // {
            //     id:2,
            // title: 'Proyecto 314',
            // image:'../img/fondo.jpg',
            // date: '1/1/2020',
            // description:'Lorem Ipsum bla bla bla bla bla',
            // keywords:['vue', 'javascript', 'html', 'css'],
            // link:'google.com'
            // }
        ]
    },
    mutations:{

    },
    actions:{

    },
    modules:{

    },
    getters:{
        getProyecto:(state)=>(id)=>{
            return state.proyectos[id];
        }

    }

  })
