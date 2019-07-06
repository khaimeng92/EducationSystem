'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teachers', [{
        temail: 'teacherken@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherDarren@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherJethro@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teachers', null, {});
  }
};