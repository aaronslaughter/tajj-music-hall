'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fakeComments = [...Array(20)].map(() => {
      return {
        user_id: faker.datatype.number({ min: 1, max: 5 }),
        event_id: faker.datatype.number({ min: 1, max: 10 }),
        content: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });
    await queryInterface.bulkInsert('comments', fakeComments);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments');
  }
};
