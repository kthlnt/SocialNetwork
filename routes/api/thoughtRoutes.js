const router = require('express').Router();


const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');


// /api/thoughts
router.route('/').get(getThought).post(createThought);


// /api/thoughts/:thoughtId
router.route('/thoughtID')
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


router.route('/:thoughtId/reactions')
  .post(createReaction);


// /api/thoughts/:thoughtId/reactions/:reactionId 
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);


module.exports = router;
