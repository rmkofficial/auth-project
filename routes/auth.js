const express = require('express');
const { registerUser, loginUser, resetPassword, updateProfile } = require('../controllers/authController');
const router = express.Router();

// Kullanıcı Kayıt
router.post('/register', registerUser);

// Kullanıcı Giriş
router.post('/login', loginUser);

// Şifre Sıfırlama
router.post('/reset-password', resetPassword);

// Profil Güncelleme
router.post('/update-profile', updateProfile);

module.exports = router;
