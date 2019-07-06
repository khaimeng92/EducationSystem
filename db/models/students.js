'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    semail: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    suspended: DataTypes.BOOLEAN
  }, {});
  Students.associate = function(models) {
    Students.belongsToMany(models.Teachers, {
      through: 'TeacherStudents',
      foreignKey: 'semail'
    })
  };
  return Students;
};