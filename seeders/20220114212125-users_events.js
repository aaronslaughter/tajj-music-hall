'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const fakejunctions = [...Array(20)].map(() => {
      return {
        user_id: faker.datatype.number({ min: 1, max: 5 }),
        event_id: faker.datatype.number({ min: 1, max: 10 }),
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });
    await queryInterface.bulkInsert('users_events', fakejunctions);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users_events');
  }
};
