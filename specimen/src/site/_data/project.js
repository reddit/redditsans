module.exports = {
  production: process.env.NODE_ENV === "production",
  development: process.env.NODE_ENV === "development",
  env: process.env.NODE_ENV || "development",
}
