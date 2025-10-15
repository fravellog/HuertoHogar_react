export default function Title({ children, level = "h2", className = "" }) {
  const Tag = level;
  return <Tag className={`text-2xl font-bold text-green-700 ${className}`}>{children}</Tag>;
}