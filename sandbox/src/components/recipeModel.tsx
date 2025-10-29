interface RecipeModalProps {
  meal: any;
  onClose: () => void;
}

export default function RecipeModal({ meal, onClose }: RecipeModalProps) {
  if (!meal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-3 text-orange-700">
          {meal.strMeal}
        </h2>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <p className="text-gray-700 text-sm mb-4">
          {meal.strInstructions || "No instructions available."}
        </p>
        {meal.strYoutube && (
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:underline"
          >
            📺 Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
}
