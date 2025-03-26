const express =  require("express")

const userModel = require("./usermodel")

const app = express()


app.get('/create', async (req,res)=> {
   let createduser = await userModel.create({
       name :"sourabh",
       email : "sourabh@gmail.com",
       username :"sourabh"
    })
    res.send(createduser)
})


app.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userData = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(
         id,
            user,
        );

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        res.send(updatedUser);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


app.get('/delete', async (req, res) => {
    try {
        const id = req.params.id;
        const userData = req.body;

        const deletedUser = await userModel.getByIdAndDelete(
            id, 
            user, 
            { new: true } 
        );

        if (!deletedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        res.send(updatedUser);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});



  


 app.listen(5000,()=> console.log("server is running on port :5000"))