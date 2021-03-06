const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    idname: {
        presence: true,
    },
    gender: {
        presence: true,
    },
    id: {
        presence: true,
        length: {
            minimum : 11,
            message: "must be at least 11 digits"
        },   
    },
    chosenfaculty: {
        presence: true
    }
} 
   
   
   var app = Vue.createApp({
        data() {
            return {
            
                firstname: null,
                lastname: null,
                idname: null,
                chosenfaculty: null,
                faculty_lists: [{faculty_id: 1, faculty_name:'Information Technology, IT'},
                                {faculty_id: 2, faculty_name:'Computer Science, CS'},
                                {faculty_id: 3, faculty_name:'Digital Service Innovation, DSI'}],
                id: null,
                image: './images/saimai.jpg',
                errors: null,
                
            
            }
        },
        methods: {
            checkForm(e){
                this.errors = validate({firstname: this.firstname,
                                        lastname: this.lastname,
                                        idname: this.idname,
                                        gender: this.gender,
                                        id: this.id,
                                        chosenfaculty: this.chosenfaculty},
                                        constraints)
                if(this.errors){
                    alert("Your Profile is updated successfully.");
                }
            }
        }
    })

    app.mount('#app')