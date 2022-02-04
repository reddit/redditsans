module.exports = {
  production: process.env.NODE_ENV === "prod",
  development: process.env.NODE_ENV === "dev",
  env: process.env.NODE_ENV || "dev",
}
