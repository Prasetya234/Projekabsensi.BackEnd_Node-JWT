const db = require("../models");
const Absen = db.absen;
const Op = db.Sequelize.Op;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const absen = {
      username: req.body.username
    };
  
    // Save Tutorial in the database
    Absen.create(absen)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Siswa."
        });
      });
  };

  exports.findAll = (req, res) => {
   const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
  
    Absen.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while retrieving Siswa."
         });
       });
   };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Absen.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Siswa with id=" + id
        });
      });
  };

   exports.update = (req, res) => {
     const id = req.params.id;
 
     Absen.update(req.body, {
       where: { id: id }
     })
       .then(num => {
         if (num == 1) {
           res.send({
             message: "Siswa was updated successfully."
           });
         } else {
           res.send({
             message: `Cannot update Siswa with id=${id}. Maybe Tutorial was not found or req.body is empty!`
           });
         }
       })
       .catch(err => {
         res.status(500).send({
           message: "Error updating Siswa with id=" + id
         });
       });
   };

   exports.delete = (req, res) => {
     const id = req.params.id;
  
     Absen.destroy({
       where: { id: id }
     })
       .then(num => {
         if (num == 1) {
           res.send({
             message: "Siswa was deleted successfully!"
           });
         } else {
           res.send({
             message: `Cannot delete Siswa with id=${id}. Maybe Tutorial was not found!`
           });
         }
       })
       .catch(err => {
         res.status(500).send({
           message: "Could not delete Siswa with id=" + id
         });
       });
   };

   exports.findAllPublished = (req, res) => {
    Absen.findAll({ where: { published: true } })
       .then(data => {
         res.send(data);
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while retrieving siswa."
         });
      });
   };