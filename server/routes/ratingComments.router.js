const express = require('express');
const router = express.Router();
const RatingsComments = require('../controllers/ratingComments.controller');

router.get('/user/:userId', RatingsComments.getReviewsByUserId);

router.get('/doctor/:doctorId', RatingsComments.getReviewsByDoctorId);

router.post('/add', RatingsComments.addReview);



module.exports = router;
