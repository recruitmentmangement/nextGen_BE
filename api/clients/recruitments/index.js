const { getTeams } = require("./teams");
const { uploadDocuments } = require("./documents");
const {tasksManagement} = require("./tasks")

const addCustomRoutes = (server) => {
    getTeams(server);
    tasksManagement(server)
    uploadDocuments(server);
};

exports.addCustomRoutes = (server) => addCustomRoutes(server);