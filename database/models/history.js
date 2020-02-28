module.exports = function(sequelize, dataTypes) {
  const History = sequelize.define("History", {
    "Date from": {
      type: dataTypes.DATEONLY,
      allowNull: false
    },
    "Date to": {
      type: dataTypes.DATEONLY,
      allowNull: false
    },
    "Number of days rented": {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    "Miles Driven": {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    "Price per day": {
        type: dataTypes.DECIMAL(6,2),
        allowNull: false,
    },
    "Total Price": {
        type: dataTypes.DECIMAL(10,2),
        allowNull: false,
    },
    "Total Price VAT": {
        type: dataTypes.DECIMAL(10,2),
        allowNull: false,
    }
  });
  History.associate = function(models) {
      History.belongsTo(models.Car)
  };
  return History;
};
