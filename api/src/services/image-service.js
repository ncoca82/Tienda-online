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
            const {name}  = path.parse(originalFileName);

            const timestamp = Date.now();
            const newFileName = `${name}_${timestamp}.webp`;

            const tmpFileName = path.join(__dirname, `../storage/tmp/${file.originalname}`);
            const originalFilePath = path.join(__dirname, `../storage/images/gallery/original/${newFileName}`);

            await sharp(tmpFileName)
                .webp({ lossless: true })
                .toFile(path.join(__dirname,`../storage/images/gallery/original/${name}.webp`))

            await sharp(tmpFileName)
                .resize(135, 135)
                .webp({ lossless: true })
                .toFile(path.join(__dirname, `../storage/images/gallery/thumbnail/${name}.webp`));

            fs.unlink(tmpFileName, (err) => {
                if (err) {
                    console.error('Error al eliminar la imagen temporal:', err);
                } else {
                    console.log('Imagen temporal eliminada con éxito.');
                }
            });

            result.push(originalFilePath);
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

