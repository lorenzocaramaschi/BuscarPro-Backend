// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const path = require('path');
const { authenticateToken, authorizeAdmin } = require('../middlewares/auth');

router.get('/admin',  (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'admin.html'));
});

module.exports = router;
