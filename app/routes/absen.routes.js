module.exports = app => {
    const absen = require("../controllers/absen.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", absen.create);
  
    // Retrieve all Tutorials
    router.get("/", absen.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", absen.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", absen.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", absen.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", absen.delete);

  
    app.use('/api/absen', router);
  };