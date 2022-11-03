const { UUID } = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Usuarios",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isSuscrip: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isActiv: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      suscipData: {
        type: DataTypes.JSON,
        defaultValue: null,
      },
      suscripTipo: {
        type: DataTypes.ENUM(["mes", "trimes"]),
        defaultValue: "mes",
      },
    },
    {
      timestamps: false,
    }
  );
};