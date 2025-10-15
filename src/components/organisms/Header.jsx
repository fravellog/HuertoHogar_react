import Title from "../atoms/Title";
import Button from "../atoms/Button";
 
 
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-green-200 shadow-md">
      <Title level="h1">Huerto Hogar</Title>
      <nav className="flex gap-4">
        <Button>Inicio</Button>
        <Button>Tienda</Button>
        <Button>Contacto</Button>
      </nav>
    </header>
  );
}