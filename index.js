const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

//middleWare
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.raahm.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    const myDB = client.db("pawMartDB");
    const userCollection = myDB.collection("users");

    //users realted API...................
    app.post("/users", async (req, res) => {
      const userDetails = req.body;
      const email = req.body.email;
      const existingUser = { email: email };
      if (existingUser) {
        console.log({ message: "this user already in database" });
      } else {
        const result = await userCollection.insertOne(userDetails);
        res.send(result);
      }
    });

    //PRODUCT realted API...................
    //OTHERS realted API...................
    //EXTRA realted API...................

    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
