require("dotenv").config();

const configs = {
  api: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "http://localhost:3000",
    nodeEnv: process.env.NODE_ENV || "development",
  },
  db: {
    development: {
      //? Aqui deberan estar las configuraciones para la coneccion con sequelize
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "chat",
      define: {
        timestamps: true, //? nos obliga a que todas las tablas tengan la propiead created_at y updated_at
        underscored: true, //? pasa de lowerCamelCase a snake_case
        underscoredAll: true,
      },
    },
    production: {
      //? Aqui deberan estar las configuraciones para la coneccion con sequelize
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "chat",
      define: {
        timestamps: true, //? nos obliga a que todas las tablas tengan la propiead created_at y updated_at
        underscored: true, //? pasa de lowerCamelCase a snake_case
        underscoredAll: true,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    },
    testing: {
      //? Aqui deberan estar las configuraciones para la coneccion con sequelize
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "chat",
      define: {
        timestamps: true, //? nos obliga a que todas las tablas tengan la propiead created_at y updated_at
        underscored: true, //? pasa de lowerCamelCase a snake_case
        underscoredAll: true,
      },
    },
  },
};

module.exports = configs;
