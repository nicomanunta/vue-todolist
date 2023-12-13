let { createApp } = Vue 

createApp({
    data(){
        return{
            newText: "",
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
    methods:{
        removeText(index){
            this.todoList.splice(index,1)
        },
        addText(){
            this.todoList.push({
                text: this.newText,
                done: false
            })
            this.newText = ""
        },
     
    }
}).mount("#app")