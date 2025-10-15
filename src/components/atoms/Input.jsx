export default function Input({ type = "text", placeholder, value, onChange, className = "" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      xx={onChange}
      className={`border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
    />
  );
}