const uploadDocuments = (server) => {
  server.post('/documents/upload', (req, res) => {
    const { name: title } = req.files.file;
    const { employeeId, type } = req.body;
    const newDocument = {
      employeeId,
      title,
      url: 'sample bucket url ',
      type: type,
    };
    return res
      .status(200)
      .json({ message: 'file received', document: newDocument });
  });
};

exports.uploadDocuments = (server) => uploadDocuments(server);
