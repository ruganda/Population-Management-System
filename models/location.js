'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    totalMales: DataTypes.INTEGER,
    totalFemales: DataTypes.INTEGER,
    total:DataTypes.INTEGER
  }, {});
  Location.associate = function(models) {
    Location.hasMany(models.Location, {foreignKey: 'locationId'}, { onDelete: 'cascade'} )

    Location.belongsTo(models.Location, { foreignKey: 'locationId', onDelete: 'CASCADE' });

  };
  return Location;
};