const express = require('express');
const auth = require('../middleware/auth');
const { getProfile, updateProfile } = require('../controllers/profileController');
const router = express.Router();

// Profil bilgilerini getirme
router.get('/', auth, getProfile);

// Profil bilgilerini güncelleme
router.put('/update', auth, updateProfile);

module.exports = router;
