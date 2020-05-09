const connection = require('../database/connection');

module.exports={
    async store(req,res){ 
        const ong_id = req.headers.authorization;

        const {originalname:fileName, size:source, path:url} = req.file;

            const [data] =  await connection('images').insert({
                ong_id,
                fileName,
                source,
                url
            });
            console.log(req.file)
            return res.json(data);
        }
    
}   