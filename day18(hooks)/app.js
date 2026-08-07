
const Fastify = require("fastify");

const app=Fastify({
   logger:true
})

app.addHook("onRequest",async(request,reply) => {
    console.log("incoming:",request.method,request.url
    )
});
app.get("/",async() =>{
    console.log("console works")
    return { 
        message:"it is working"
    }
})

app.addHook("preHandler", async (request, reply) => {

  if (request.url.startsWith("/admin")) {

    const token = request.headers.authorization;

    if (!token) {
      return reply.code(401).send({
        message: "Unauthorized"
      });
    }

    console.log("Token Found:", token);
  }

});

app.get("/admin", async () => {
  return {
    message: "Welcome Admin"
  };
});

app.get("/student", async () => {
  return {
    message: "Welcome Student"
  };
});

  app.get("/dashboard", async () => {
    return { message: "Admin Dashboard" };
  });

  app.get("/users", async () => {
    return { message: "Admin Users" };
  });

  app.addHook("preValidation", async (request) => {
    if (!request.body.role) {
        request.body.role = "student";
    }
});

app.post("/role", async (request, reply) => {

    const { name, age, role } = request.body;

    return {
        name,
        age,
        role
    };

});









app.get("/user/:id/:name", async (request) => {

    const { id, name } = request.params;
     

    return `${name}\n${id}`;

});

app.post("/student",(request,reply)=>{

    const{name,age}=request.body
    reply.code(300).send([name,age])

});




app.delete("/students/:id",(request,reply)=>{

    const id=request.params.id;

    reply.send({

        message:"Student Deleted",

        id

    });

});


app.patch("/students/:id",async(request,reply)=>{

const{id}=request.params;

const data=request.body;

return{
message:`Student ${id} Updated`,
data
}

})
app.post("/students/:id",async(request,reply)=>{

const{id}=request.params;

const data=request.body;

return{
message:`Student ${id} created`,
data
}

})
async function auth(request, reply) {
  const token = request.headers.authorization;

  if (!token) {
    return reply.code(401).send({ message: "Unauthorized" });
  }
}

app.get("/profile", {
  preHandler: auth
}, async () => {
  return { message: "Welcome" };
});

app.get("/profiles", {
  preHandler: auth
}, async () => {
  return { message: "Welcome" };
});
app.addHook('preHandler', async (request, reply) => {
  request.customUser = 'Alice'; 
});

app.get('/hello', async (request, reply) => {
  return { message: `Hello, ${request.customUser}` };
});

app.addHook("preValidation", async (request) => {
  if (!request.body.role) {
    request.body.role = "student";
  }
});
app.post("/role", async(request,reply) =>{
    const {name,role} = request.body;
    return{name,role }
})

const studentSchema = {
  body: {
    type: "object",
    required: ["name", "age"],
    properties: {
      name: { type: "string" },
      age: { type: "integer" }
    }
  }
};

app.post("/details", { schema: studentSchema }, async (request) => {
  return request.body;
});

app.decorate("hello", function () {
  return "Hello Fastify";
});

app.get("/say", async () => {
  return app.hello();
});




app.listen({
    port:3000,host:"0.0.0.0"},(err,address) =>{
        if(err){
            console.log(err);
            process.exit(1);
        }
        console.log(address);
    }

)
