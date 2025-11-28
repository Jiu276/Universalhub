const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div className="category-filter">
    {['All', ...categories].map((category) => (
      <button
        key={category}
        type="button"
        className={selected === category ? 'chip active' : 'chip'}
        onClick={() => onSelect(category)}
      >
        {category}
      </button>
    ))}
  </div>
)

export default CategoryFilter

