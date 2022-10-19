const { UUID } = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "images",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        
      },
      img: {
        type: DataTypes.BLOB('long'),
        allowNull: false,

      },
    }, 
    {
      timestamps: false,
    }
  );
};
