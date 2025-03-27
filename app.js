const express =  require("express")

const userModel = require("./usermodel")

const app = express()

app.use(express.json())
app.get('/create', async (req,res)=> {
   let createduser = await userModel.create({
       name :"sourabh",
       email : "sourabh@gmail.com",
       username :"sourabh"
    })
    res.send(createduser)
})


app.put('/update/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const userData = req.body;
        

        const updatedUser = await userModel.findByIdAndUpdate(
         id,
         userData,
         {
            new:true
         }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        res.send(updatedUser);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


app.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const deletedUser = await userModel.findByIdAndDelete(
            id
        );

        if (!deletedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        res.send(deletedUser);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});



  


 app.listen(5000,()=> console.log("server is running on port :5000"))