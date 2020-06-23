module.exports = {
  client: "pg",
  connection: process.env.POSTGRES_URL,
  pool: { min: 0, max: 7 },
  migrations: {
    tableName: "migrations",
  },
};
