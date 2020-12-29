module.exports = (sequelize, Sequelize) => {
    const Absen = sequelize.define("absens", {
      username: {
        type: Sequelize.STRING
      }
    });
  
    return Absen;
  };