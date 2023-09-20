const { getTeams } = require('./teams');
const { uploadDocuments } = require('./documents');
const { tasksManagement } = require('./tasks');
const { uploadCandidatesCvs } = require('./cadidates');

const addCustomRoutes = (server) => {
  getTeams(server);
  tasksManagement(server);
  uploadDocuments(server);
  uploadCandidatesCvs(server);
};

exports.addCustomRoutes = (server) => addCustomRoutes(server);
