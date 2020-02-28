module.exports = function(sequelize, dataTypes) {
  const Car = sequelize.define("Car", {
    Maker: {
      type: dataTypes.STRING,
      allowNull: false
    },
    Model: {
      type: dataTypes.STRING,
      allowNull: false
    },
    Year: {
      type: dataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    "Number of Seats": {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    "Price per Day": {
        type: dataTypes.DECIMAL(6,2),
        allowNull: false,
    },
    "Rented Date From": {
        type: dataTypes.DATEONLY,
        allowNull: false,
    },
    "Rented Date To": {
        type: dataTypes.DATEONLY,
        allowNull: true,
    }
  });

  Car.associate = function(models) {
      Car.hasMany(models.History);
  };
  return Car;
};
