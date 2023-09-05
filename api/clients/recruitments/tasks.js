const tasksManagement = (server) => {
  server.put('/tasks/markTaskComplete/:id', (req, res) => {
    const { id } = req.params;
    return res
      .status(200)
      .json({ message: 'Updated!', document: id });
  });
};

exports.tasksManagement = (server) => tasksManagement(server);
