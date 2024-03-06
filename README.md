The API enables users to perform CRUD operations on recipes and includes user authentication and profile management functionalities.
Technologies Used
1. Node.js
2. Express.js
3. MongoDB
4. bcryptjs (for password hashing)
5. jsonwebtoken (for JWT authentication)
API Endpoints
User Routes

POST /api/auth/register - Register a new user.
POST /api/auth/login - Log in existing user.
GET /api/auth/profile - Get user profile (requires authentication).
Recipe Routes

GET /api/recipes - Get all recipes.
GET /api/recipes/:id - Get recipe by ID.
POST /api/recipes - Create a new recipe (requires authentication).
PUT /api/recipes/:id - Update a recipe (requires authentication).
DELETE /api/recipes/:id - Delete a recipe (requires authentication).
GET /api/recipes/search?query=searchTerm - Search recipes by title.
