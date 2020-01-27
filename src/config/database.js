require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  define: {
    timestamps: true,
    underscored: true,
  },
};
