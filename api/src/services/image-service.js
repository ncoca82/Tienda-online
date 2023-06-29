const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image

module.exports = class ImageService {
    
    uploadImage = async (images) => {
    
        const files = images.file;

        for (const file of files) {

            const fileName = file.originalname.replace(/[\s_]/g, '-');
            
            const tmpFileName = path.join(__dirname, `../storage/tmp/${file.originalname}`);
            const {name}  = path.parse(fileName);
        
            // try {
            //   await fs.promises.access(path.join(__dirname, `../storage/images/gallery/original/${name}`));
            //   console.log(tmpFileName);
            // } catch (err) {
            
            // }

            await sharp(tmpFileName)
            .webp({ lossless: true })
            .toFile



        }
    };

    resizeImages = async (entity, entityId, images) => {

    }

    deleteImages = async filename => {

    }

    getThumbnails = async (limit, offset) => {
        
    }

    
}

