const http = require("http");

const server = http.createServer((req, res) => {
  // Set the content type for the response
  res.setHeader("Content-Type", "application/json");

  const port = process.env.PORT || 8900;

  if (req.url === "/") {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Welcome to Men & Women's producsts" }));
  } else if (req.url === "/men") {
    // data for men's products
    const menProducts = [
      { 
        name: "t-shirt", 
        price: "5000",
        brand: "addidas",
        category: "Men's clothing",
        color: "Black",
        size: "M",
    },    
    ];
    res.writeHead(200);
    res.end(JSON.stringify(menProducts));
  } else if (req.url === "/women") {
    // data for women's products
    const womenProducts = [
      { 
        name: "shuit", 
        category: "Women's clothing",
        price: "9000",
        brand: "Zara",
        color: "Royal blue",
        size: "S"
      },
    ];
    res.writeHead(200);
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Page not found" }));
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*******************************************************using Express********************************************************************** */

// const http = require('http');
// const express = require('express');

// // Create an Express app
// const app = express();

// // Define a sample product data for men and women
// const menProducts = [
//   // sample men's products
//   { id: 1, 
//     name: "t-shirt", 
//     price: "5000",
//     brand: "addidas",
//     category: "Men's clothing",
//     color: "Black",
//     size: "M",
//     rating: 4
//   },

// ];

// const womenProducts = [
//   //sample women's products
//   { id: 1,
//     name: "shuit", 
//     category: "Women's clothing",
//     price: "9000",
//     brand: "Zara",
//     color: "Royal blue",
//     size: "S",
//     rating: 4.5
//   },

// ];

// // here Defining routes and their handlers
// app.get('/', (req, res) => {
//   res.send("Welcome to Men & Women dummy data...");
// });

// app.get('/men', (req, res) => {
//   res.json(menProducts);
// });

// app.get('/women', (req, res) => {
//   res.json(womenProducts);
// });

// // Handle other routes (404)
// app.use((req, res) => {
//   res.status(404).send('Page not found');
// });

// // Create an HTTP server using the Express app
// const server = http.createServer(app);

// const PORT =  process.env.PORT || 6000;

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}...`);
// });
