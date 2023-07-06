const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image

module.exports = class ImageService {
    
    uploadImage = async (images) => {
    
        const result = []

        const files = images.file;

        for (const file of files) {

            const originalFileName = file.originalname.replace(/[\s_]/g, '-');
            let {name}  = path.parse(originalFileName);

            const tmpFileName = path.join(__dirname, `../storage/tmp/${file.originalname}`);
            let originalFilePath = path.join(__dirname, `../storage/images/gallery/thumbnail/${name}.webp`);
            
            name = await fs.access(originalFilePath).then( async () => {
                const timestamp = Date.now();
                const newFileName = `${name}-${timestamp}.webp`;
                return newFileName;
            }).catch(() => {
                return `${name}.webp`;
            });

            await sharp(tmpFileName)
                .webp({ lossless: true })
                .toFile(path.join(__dirname,`../storage/images/gallery/original/${name}`))

            await sharp(tmpFileName)
                .resize(135, 135)
                .webp({ lossless: true })
                .toFile(path.join(__dirname, `../storage/images/gallery/thumbnail/${name}`));

            await fs.unlink(tmpFileName);
        
            result.push(name);
        }

        return result;
    };

    resizeImages = async (entity, entityId, images) => {
        
    }

    deleteImages = async filename => {

    }

    getThumbnails = async (limit, offset) => {
        
    }

    
}

