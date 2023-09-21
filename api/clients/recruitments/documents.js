const uploadDocuments = (server) => {
  server.post('/documents/upload', (req, res) => {
    const { name: title } = req.files.file;
    const { resourceId, type } = req.body;
    const newDocument = {
      resourceId,
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
