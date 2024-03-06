const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json({ recipes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) throw new Error('Recipe not found');
        res.status(200).json({ recipe });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

exports.createRecipe = async (req, res) => {
    try {
        const { title, description, ingredients, instructions, imageUrl } = req.body;
        const recipe = await Recipe.create({ title, description, ingredients, instructions, imageUrl });
        res.status(201).json({ message: 'Recipe created successfully', recipe });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const { title, description, ingredients, instructions, imageUrl } = req.body;
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, 
            { title, description, ingredients, instructions, imageUrl }, 
            { new: true }
        );
        if (!recipe) throw new Error('Recipe not found');
        res.status(200).json({ message: 'Recipe updated successfully', recipe });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) throw new Error('Recipe not found');
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};
exports.searchRecipes = async (req, res) => {
    try {
        const { query } = req.query;
        const recipes = await Recipe.find({ $text: { $search: query } });
        res.status(200).json({ recipes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};