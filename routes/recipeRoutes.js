const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.post('/', authMiddleware.authenticateUser, recipeController.createRecipe);
router.put('/:id', authMiddleware.authenticateUser, recipeController.updateRecipe);
router.delete('/:id', authMiddleware.authenticateUser, recipeController.deleteRecipe);

module.exports = router;
router.get('/search', recipeController.searchRecipes);