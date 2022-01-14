'use strict';
const { query } = require('express');
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const fakeEvents = [...Array(10)].map(() => {
      return {
        event_code: faker.internet.password(),
        likes: faker.datatype.number({ min: 100, max: 200 }),
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });
    await queryInterface.bulkInsert('events', fakeEvents);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('events');
  }
};
