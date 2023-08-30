const tasksManagement = (server) => {
  server.put('/tasks/markTaskComplete/:id', (req, res) => {
    const { id } = req.params;
    // const { employeeId, type } = req.body;
    // const newDocument = {
    //   employeeId,
    //   title,
    //   url: 'sample bucket url ',
    //   type: type,
    // };
    return res
      .status(200)
      .json({ message: 'Updated!', document: id });
  });
};

exports.tasksManagement = (server) => tasksManagement(server);
