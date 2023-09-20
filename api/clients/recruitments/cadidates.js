const uploadCandidatesCvs = (server) => {
  server.post('/candidates/uploadCv', (req, res) => {
    const { name: title } = req.files.file;
    const { employeeId, type } = req.body;
    const newCv = {
      employeeId,
      title,
      url: 'bucket url...',
      type: type,
    };
    return res
      .status(200)
      .json({ message: 'Cv received', document: newCv });
  });
};

exports.uploadCandidatesCvs = (server) => uploadCandidatesCvs(server);
