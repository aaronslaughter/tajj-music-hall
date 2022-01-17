const { User, Event, sequelize } = require('./models');

const getEventsByUserId = async () => {
  const allEvents = await User.findAll({
    include: [
      {
        model: Event,
        as: 'event_list',
        through: { attributes: [] }
      }
    ],
    where: { id: 2 }
    // returning: true
  });
  console.log(JSON.stringify(allEvents, null, 2));
};
async function main() {
  try {
    await getEventsByUserId();
  } catch (error) {
    console.log(error);
  } finally {
    sequelize.close();
  }
}

main();
