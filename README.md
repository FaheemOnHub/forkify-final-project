# Forkify Project

# Recipe application with custom recipe uploads.
<img width="1673" alt="Screenshot 2025-03-17 at 11 34 20 AM" src="https://github.com/user-attachments/assets/da24b4cb-687b-4e21-87e9-5cc832d8ba0b" />

# Overview

The Recipe App allows users to search for recipes, view detailed instructions, bookmark favorites, and even add their own recipes. This project follows the Model-View-Controller (MVC) pattern to separate concerns and ensure maintainability.

# Features
- Search for recipes from an external API
- View detailed recipe information (ingredients, servings, cooking steps)
- Adjust the number of servings dynamically
- Bookmark favorite recipes for later access
- Add new custom recipes
- Pagination support for search results
- Modern UI with smooth interactions

# Usage

- Search for recipes: Enter a dish name in the search bar and press enter.
- View recipe details: Click on a recipe from the search results.
- Adjust servings: Use the serving size buttons to dynamically update ingredient quantities.
- Bookmark recipes: Click the bookmark icon to save a recipe for later.
- Add a recipe: Click "Add Recipe", fill in the form, and submit.

# Code Structure and MVC Pattern

# The project follows the MVC (Model-View-Controller) architecture, which helps maintain a clean separation of concerns.

1. Model (Data Layer)
- Handles fetching, storing, and updating data. Defined in model.js.
- Fetches recipes from an external API.
- Stores bookmarked recipes in local storage.
- Updates ingredient quantities based on servings.

2. View (UI Layer)

- Responsible for displaying data to the user and updating the UI efficiently.
- Defined in separate View classes like recipeView.js, searchView.js, and bookmarksView.js.
- Uses a View.js base class for common UI rendering logic.
- Implements methods like render(), renderSpinner(), renderError(), and update().

3. Controller (Logic Layer)

- Acts as the bridge between the Model and View.
- Defined in config.js (acts as the main controller).
- Handles user interactions (e.g., searching, bookmarking, adjusting servings).
- Calls model.js for data updates and View classes for UI updates.

# Differences in Coding Paradigm

# This project follows a modular and event-driven approach:
- Modular Design: Each component (Model, View, Controller) is in separate files.
- Asynchronous Programming: Uses async/await for API calls with error handling.
- Efficient DOM Updates: Instead of re-rendering the entire UI, update() modifies only the necessary parts.
- Encapsulation: Views only interact with the controller, keeping the logic separate from UI code.

# Technologies Used

- JavaScript (ES6+)
- HTML & CSS
- Parcel.js (for bundling)
- Fetch API (for data fetching)
- LocalStorage (for bookmarks)

# Future Enhancements

- Implement user authentication
- Add categories for recipe filtering
- Improve UI with animations and better styling

# License

This project is licensed under the MIT License. Feel free to contribute and improve the app!
