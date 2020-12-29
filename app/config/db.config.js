module.exports = {
  HOST: "localhost",
  USER: "prasetya",
  PASSWORD: "1234",
  DB: "db_absensi",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};