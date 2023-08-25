const { getTeams } = require("./teams");
const { uploadDocuments } = require("./documents");

const addCustomRoutes = (server) => {
    getTeams(server);
    uploadDocuments(server);
};

exports.addCustomRoutes = (server) => addCustomRoutes(server);