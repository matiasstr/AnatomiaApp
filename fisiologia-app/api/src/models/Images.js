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
      title:{
        type: DataTypes.STRING,
        allowNull: false,       
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      podcast: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      grupo: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      }
    },
    {
      timestamps: false,
    }
  );
};
