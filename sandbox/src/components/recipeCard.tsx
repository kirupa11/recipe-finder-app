interface RecipeCardProps {
  meal: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };
  onSelect: (id: string) => void;
}

export default function RecipeCard({ meal, onSelect }: RecipeCardProps) {
  return (
    <div
      onClick={() => onSelect(meal.idMeal)}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold text-gray-800">{meal.strMeal}</h2>
      </div>
    </div>
  );
}
