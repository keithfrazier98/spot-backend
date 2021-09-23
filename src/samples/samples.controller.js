const service = require('./samples.service')

async function get(req, res, next) {
    const data = await service.get()
    res.status(200).json({data:data})
}

module.exports={
    get
}