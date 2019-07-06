'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teachers = sequelize.define('Teachers', {
    temail: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {});
  Teachers.associate = function(models) {
    Teachers.belongsToMany(models.Students, {
      through: 'TeacherStudents',
      foreignKey: 'temail'
    })
  };
  return Teachers;
};