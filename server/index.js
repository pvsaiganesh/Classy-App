const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const app = express();

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  nameoffirm: String,
  businesscategory: String,
  phonenumber: { type: Number, required: true, unique: true },
  address: String,
  landmark: String,
  pincode: Number,
  location: String,
  joiningdate: { type: Date, default: Date.now },
  profilepic: String,
  description: String,
  email: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model("user", UserSchema);
// mongoose.connect(process.env.DATABASE_URI, () => {
//   console.log("Mongo connected");
// });
// app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

// All other GET requests not handled before will return our React app

const cors = require("cors");

app.use(express.json());
app.use(cors());

// const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://ipvsaiganesh:${encodeURIComponent(
  "Sairam@rjss12"
)}@biziknitcluster.qi4id.mongodb.net/?retryWrites=true&w=majority&appName=BiziknitCLuster`;
mongoose.connect(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (e) {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//     console.log(e);
//   }
// }
// let collection = client.db("Biziknit").collection("Biziknit");
// run();

app.post("/login", async (req, res) => {
  const { phonenumber, password } = req.body;
  // console.log(collection.find({ phonenumber }).limit(1));
  await UserModel.findOne({ phonenumber }).then((user) => {
    if (user) {
      if (user.phonenumber == phonenumber) {
        res.json("Success");
      } else {
        res.json("No record existed");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", async (req, res) => {
  // collection.insertOne({ ...req.body });

  await UserModel.create(req.body)
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
