# 🍳 Recipe Finder

The **Recipe Finder App** helps users discover recipes based on the ingredients they already have.  
Built with **React** and **Tailwind CSS**, it focuses on simplicity, usability, and quick search interactions.

This version is designed for a sample user — **Taylor**, who wants quick meal inspiration without scrolling through cluttered recipe sites.

---

## 🧠 Approach & Design Choices

### 1. 🎯 Goal-Driven MVP

The first version focuses on one clear goal:

> “Show recipes that can be made with the ingredients the user already has.”

No sign-in, no complex filters — just instant, relevant results.

---

### 2. ⚙️ Tech Stack Decisions

| Tool / Tech      | Purpose                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------- |
| **React**        | Component-based UI, easy state management for modals and search.                         |
| **Tailwind CSS** | Utility-first styling, responsive design without external CSS files.                     |
| **API**          | [TheMealDB](https://www.themealdb.com/api.php) (or Spoonacular) for recipe data.         |
| **Deployment**   | [CodeSandbox](https://codesandbox.io/) for prototyping; adaptable for Vercel or Netlify. |

---

### 3. 🧩 Component Architecture

Each functionality is modular and reusable:

| Component           | Purpose                                                      |
| ------------------- | ------------------------------------------------------------ |
| **IngredientInput** | Accepts user ingredients (tags or comma-separated text).     |
| **RecipeList**      | Displays fetched recipes in a responsive grid.               |
| **RecipeCard**      | Shows recipe image and name in a compact layout.             |
| **RecipeModal**     | Opens detailed recipe info — steps, image, and YouTube link. |

This modular design keeps the UI maintainable and scalable for future versions.

---

### 4. 🎨 UI & UX Choices

- Minimal and focused interface — soft colors, centered layout.
- Responsive grid for recipe cards.
- Modal for recipe details instead of new page navigation.
- Loading spinner and “No recipes found” states for smooth feedback.
- Accessible interactions (keyboard navigation and ARIA roles).

---

### 5. 💻 Code Practices

- **TypeScript interfaces** (`Meal`, `RecipeCardProps`, `RecipeModalProps`) for type safety.
- Avoided `any` types for maintainability.
- Clear naming conventions and modular exports.
- Consistent use of Tailwind utility classes for styling.
- Organized component structure with early returns and readable logic.

---

### 6. 🚀 Next Steps / Future Enhancements

- Add **filters** for cuisine, cooking time, or diet preferences.
- Allow users to **save favorite recipes** (via localStorage).
- Add **voice input** or image-based ingredient recognition.
- Integrate with **OpenAI API** for AI-based recipe suggestions.
- Add **offline caching** for last search results.

---

## 🧩 Example User Flow

1. User enters ingredients (e.g., “egg, bread, milk”).
2. App fetches matching recipes via TheMealDB API.
3. Recipes appear in a responsive grid layout.
4. Clicking **View Recipe** opens a modal with detailed instructions.
5. User can close the modal and continue exploring.

---

## 📦 How to Run (CodeSandbox)

1. Open this project in [CodeSandbox](https://codesandbox.io/).
2. Ensure dependencies are installed (React + Tailwind CSS).
3. Run the app using the **"Preview"** panel on the right.
4. Type any ingredient to fetch recipes instantly!

---

## 🧑‍💻 Working with AI

This project was developed through an iterative problem-solving process using ChatGPT:

- Broke the problem into steps (setup → fetch → UI → polish).
- Asked specific, structured questions about debugging and UI behavior.
- Requested code reviews and optimization suggestions.
- Used feedback to improve accessibility, code quality, and user flow.

---
