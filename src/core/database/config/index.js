console.log('DATABASE_URL',process.env.DATABASE_URL)
module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  pool: { min: 0, max: 7 },
  migrations: {
    tableName: "migrations",
  },
};
