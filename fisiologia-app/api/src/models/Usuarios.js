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
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
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
      suscripFin: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      // suscripTipo: {
      //   type: DataTypes.ENUM(["mes", "trimes"]),
      //   defaultValue:"mes"
      //  },
    }, 
    {
      timestamps: false,
    }
  );
};
