module.exports = (sequelize, Sequelize) => {
    const Absen = sequelize.define("absens", {
      id_absen: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      lng: {
        type: Sequelize.STRING
      }
    });
  
    return Absen;
  };