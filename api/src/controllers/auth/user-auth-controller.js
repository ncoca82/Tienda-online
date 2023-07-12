const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv').config();
const process = require('process');
const db = require('../../models');
const User = db.User;
const TrackingService = require('../../services/tracking-service.js');

exports.signin = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!user) {
            return res.status(404).send({ message: 'Usuario o contraseña incorrecta' });
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) {
            return res.status(404).send({
                accessToken: null,
                message: 'Usuario o contraseña incorrecta'
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400
        });

        const tracker = new TrackingService();
        await tracker.userTracking(user.id, req.socket.remoteAddress, req.originalUrl, req.method, res.statusCode);

        console.log(`Usuario ${user.id}`);

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};


