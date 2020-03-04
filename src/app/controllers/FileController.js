import File from '../models/File';

class FileController {
  async store(req, res) {
    const { filename: name, originalname: path } = req.file;
    const file = await File.create({ name, path });

    return res.json(file);
  }
}

export default new FileController();
