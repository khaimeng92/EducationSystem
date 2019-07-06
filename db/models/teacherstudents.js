'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeacherStudents = sequelize.define('TeacherStudents', {
    temail: DataTypes.STRING,
    semail: DataTypes.STRING
  }, {});
  TeacherStudents.associate = function(models) {
    // associations can be defined here
  };
  return TeacherStudents;
};