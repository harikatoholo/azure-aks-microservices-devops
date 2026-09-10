const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const products = [
  {
    id: 1,
    name: "Spider-Man T-Shirt",
    price: 499
  },
  {
    id: 2,
    name: "Kids Backpack",
    price: 799
  }
];

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "catalog-service"
  });
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Catalog service running on port ${PORT}`);
  });
}

module.exports = app;