import Title from "../atoms/Title";
import Button from "../atoms/Button";
 
 
export default function HomePage() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-green-50 to-green-100">
      <Title level="h2">Bienvenido a Huerto Hogar</Title>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Compra productos frescos directamente desde tu casa, de manera rápida y sostenible.
      </p>
      <Button className="mt-6">Explorar Tienda</Button>
    </section>
  );
}