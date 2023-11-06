jQuery("#form").validate({

    rules:{
        name:"required",
        email:{
            required:true,
            email:true,
        },
        password:{
            required:true,
            minlength:7
        }
    },
    messege:{
        name:"Please fill out this field",
        email:{
            required:"Please fill out this field",
            email:"Enter a valid Email",
        },
        password:{
            required:"Please fill out this field",
            minlength:"This must have 8 characters"
        }
    }
});