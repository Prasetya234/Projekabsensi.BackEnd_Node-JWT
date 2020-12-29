module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    nisn: {
      type: Sequelize.STRING
    },
    nama: {
      type: Sequelize.STRING
    },
    kelas: {
      type: Sequelize.STRING
    },
    alamat: {
      type: Sequelize.STRING
    }
  });

  return User;
};