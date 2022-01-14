'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fakeUsers = [...Array(5)].map(() => {
      return {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password_digest: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });
    await queryInterface.bulkInsert('users', fakeUsers);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users');
  }
};
