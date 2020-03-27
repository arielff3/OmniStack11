const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const {ong_id} = req.body;
    const ong = await connection('ongs').where('id', ong_id).select('name').first();
    if (!ong) {
      return res.status(401).json({error: "Id não encontrado"})
    }
    return res.status(200).json(ong)
  }
}