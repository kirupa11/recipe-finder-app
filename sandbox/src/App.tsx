import React, { useState } from "react";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    if (!ingredient.trim()) {
      setError("Please enter an ingredient!");
      setRecipes([]);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError("No recipes found for that ingredient.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      {/* HEADER */}
      <div className="p-6 sticky top-0 bg-orange-50 z-10 shadow-sm">
        <h1 className="text-3xl font-bold text-center text-orange-700 mb-4">
          🍳 Recipe Finder
        </h1>

        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Enter an ingredient (e.g. chicken)"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="border border-orange-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={fetchRecipes}
            className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* SCROLLABLE RESULTS */}
      <div className="flex-1 overflow-y-auto p-6">
        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          </div>
        )}

        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {!loading && !error && recipes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-orange-700">
                    {recipe.strMeal}
                  </h2>
                  <a
                    href={`https://www.themealdb.com/meal/${recipe.idMeal}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-orange-600 hover:underline"
                  >
                    View Recipe →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
