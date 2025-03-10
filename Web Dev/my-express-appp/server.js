const express = require("express");
const app = express();

//Sample Data
const users =[
    {id: 1, name:"Alice"},
    {id: 2, name:"Bob"},
];

const products=[
    {id: 1, name:"Laptop", price:999},
    {id: 2, name:"Phone", price:699},
];

const services=[
    {id: 1, name:"Computer Repair", price:199},
    {id: 2, name:"Phone Repair", price:199},
    {id: 3, name:"IT Services", price:249},
];

const customers=[
    {id: 1, name:"Sara"},
    {id: 2, name:"Jacob"},
    {id: 3, name:"Garrett"},
];

const reviews=[
    {id: 1, name:"Sara", review:"5 Stars"},
    {id: 2, name:"Jacob", review:"5 Stars"},
    {id: 3, name:"Garrett", review:"4 Stars"},
];

const tools=[
    {id: 1, name:"IpConfig", price:"49"},
    {id: 2, name:"Wireshark", price:"89"},
    {id: 3, name:"Ping", price:"79"},
];


// Routing...

app.get("/", (req, res) => 
res.send("Welcome to my API!"));

app.get("/users", (req, res)=>
res.json(users));

app.get("/products", (req,res)=>
res.json(products));

app.get("/services", (req,res)=>
res.json(services));

app.get("/customers", (req,res)=>
    res.json(customers));

app.get("/reviews", (req,res)=>
    res.json(reviews));

app.get("/tools", (req,res)=>
    res.json(tools));

//Start server...
const PORT = 3000;
app.listen(PORT, () =>
console.log('Server running on http://localhost:${PORT}'));