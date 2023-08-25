const db=require('../../../db.json');

const getTeams = (server) => {
  server.get("/amir/teams", (req, res) => {
    console.log('asd');
    const teams=db.teams;

    return res.status(200).json({teams});
  });
};

exports.getTeams = (server) => getTeams(server);
