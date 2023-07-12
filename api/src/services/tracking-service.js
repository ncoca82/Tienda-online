const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const db = require('../models');
const User = db.User;
const Tracking = db.Tracking;

module.exports = class TrackingService {

    async userTracking(id, ip, resource, method, status) {

        try {
            const trackingData = await Tracking.create({
                userId: id,
                ip: ip,
                resource: resource,
                method: method,
                statusCode: status
            });
            return trackingData;
        } catch (error) {
            console.error('Error al realizar el seguimiento:', error);
            throw error;
        }
    }
};