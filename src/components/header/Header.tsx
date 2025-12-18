import './header.css'
type HeaderProps = {
  currentPage?: 'Home' | 'Methods' | 'Coffee'
};

export const Header = ({ currentPage }: HeaderProps) => {
  return (
    <header className="header">
      <div>
        <h1>Coffee Coders</h1>
      </div>
      <nav>
        <button>Home</button>
        <button>Metodos</button>
        <button>Cafés</button>
      </nav>
    </header>
  )
}