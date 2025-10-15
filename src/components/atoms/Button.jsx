export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      xx={onClick}
      className={`px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition ${className}`}
    >
      {children}
    </button>
  );
}