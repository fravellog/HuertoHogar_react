import Title from "../atoms/Title";
import Button from "../atoms/Button";
 
 
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-green-200 shadow-md">
      <Title level="h1">Huerto Hogar</Title>
      <nav className="flex gap-4">
        <Button>Inicio de Sesión</Button>
        <Button>Tienda</Button>
        <Button>Contacto</Button>
        <Button>Blog</Button>
        <Button>Perfil</Button>
        <Button>Carrito</Button>

      </nav>
    </header>
  );
}

