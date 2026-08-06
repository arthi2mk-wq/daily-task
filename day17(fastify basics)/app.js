const Fastify = require("fastify");

const app=Fastify({
   logger:true
})
app.get("/",async() =>{
    return { 
        message:"it is working"
    }
})

app.get("/user/:id/:name", async (request) => {

    const { id, name } = request.params;
     

    return `${name}\n${id}`;

});

app.post("/student",(request,reply)=>{

    const{name,age}=request.body
    reply.code(300).send([name,age])

});

app.get("/day/:day", (request, reply) => {

    const day = request.params.day;

    switch (day) {

        case "1":
            return reply.send("Monday");

        case "2":
            return reply.send("Tuesday");

        case "3":
            return reply.send("Wednesday");

        default:
            return reply.send("Invalid Day");
    }

});


app.post("/user",async(request)=>{

    const {name,age}=request.body;

return(

        [name,age]
)
});


app.post("/user/:id", (request, reply) => {

    const id = request.params.id;
    const { name, age } = request.body;

    reply.send({
        id,
        name,
        age
    });

});
app.post("/students", function(request, reply){

    reply.send(request.body);

});

app.get("/age/:age", (request, reply) => {

    const age = Number(request.params.age);

    if (age >= 18) {
        return reply.send({
            message: "Eligible to Vote"
        });
    } else {
        return reply.send({
            message: "Not Eligible"
        });
    }

});

app.delete("/students/:id",(request,reply)=>{

    const id=request.params.id;

    reply.send({

        message:"Student Deleted",

        id

    });

});

app.get("/student/:id", (request, reply) => {

    const id = Number(request.params.id);

    if (id === 101) {
        return reply.code(200).send({
            id,
            name: "Arthi"
        });
    }

    return reply.code(404).send({
        message: "Student Not Found"
    });

});
app.listen({
    port:3000
})