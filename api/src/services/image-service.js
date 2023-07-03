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

            const fileName = file.originalname.replace(/[\s_]/g, '-');

            const tmpFileName = path.join(__dirname, `../storage/tmp/${file.originalname}`);
            const {name}  = path.parse(fileName);
        
            // try {
            //     await fs.promises.access(path.join(__dirname, `../storage/images/gallery/original/${name}`));
                
            // } catch (err) {
                
            // }

            console.log(tmpFileName)

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

            result.push(path.join(__dirname, `../storage/images/gallery/thumbnail/${name}.webp`));
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

