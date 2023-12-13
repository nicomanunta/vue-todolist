let { createApp } = Vue 

createApp({
    data(){
        return{
            todoList:[
                {
                    text: "Preparare il pranzo",
                    done: false
                },
                {
                    text: "Pulire il soggiorno",
                    done: true
                },
                {
                    text: "Andare alle poste",
                    done: false
                },
                {
                    text: "Finire l'esercizio di oggi",
                    done: false
                },
                {
                    text: "Andare all'allenamento",
                    done: false
                },

            ]
        }
    },
    methods(){

    }
}).mount("#app")