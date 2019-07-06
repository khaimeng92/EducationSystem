'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teacherstudents', [{
        temail: 'teacherken@gmail.com',
        semail: 'student01@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherken@gmail.com',
        semail: 'student02@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherken@gmail.com',
        semail: 'student03@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherDarren@gmail.com',
        semail: 'student11@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherDarren@gmail.com',
        semail: 'student12@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherDarren@gmail.com',
        semail: 'student13@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherDarren@gmail.com',
        semail: 'student14@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherJethro@gmail.com',
        semail: 'student21@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }, {
        temail: 'teacherJethro@gmail.com',
        semail: 'student22@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(), 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teacherstudents', null, {});
  }
};