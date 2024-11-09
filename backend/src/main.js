const express = require("express");
const cors = require("cors");
const { generatePersona } = require("./utils/persona");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/persona", async (req, res) => {
  try {
    const { brandName, productDescription, numResponses } = req.body;

    if (!brandName || !productDescription) {
      return res
        .status(400)
        .json({ error: "Brand Name and Product Description are required" });
    }

    const {personas} = await generatePersona(brandName, productDescription, numResponses);

    res.status(200).json({ personas });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4500, () => {
  console.log("Server is running on port 4500");
});
