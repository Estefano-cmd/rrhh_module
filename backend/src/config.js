module.exports = {
    db: {
      user: process.env.DB_USER || "barracuda",
      password: process.env.DB_PASSWORD || "bzspnIpkU4Wa6f2",
      host: process.env.DB_HOST || "142.93.2.66",
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_DATABASE || "integrator_dev",
    },
  };