'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [{
        semail: 'student01@gmail.com',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        semail: 'student02@gmail.com',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        semail: 'student03@gmail.com',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        semail: 'student11@gmail.com',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        semail: 'student12@gmail.com',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        semail: 'student13@gmail.com',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        semail: 'student14@gmail.com',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        semail: 'student21@gmail.com',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        semail: 'student22@gmail.com',
        suspended: false,
        createdAt: new Date(),
        updatedAt: new Date(), 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};