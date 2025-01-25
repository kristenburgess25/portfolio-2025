import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav style={{ backgroundColor: 'black' }}>
      <div style={{ textAlign: 'right', height: '4rem', margin: 'auto', paddingTop: '1.25rem' }}>
      <Link style={{ margin: '1rem 2rem' }} href="/">Home</Link>
      <Link style={{ margin: '1rem 2rem' }} href="/about">About</Link>
      <Link style={{ margin: '1rem 2rem' }} href="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default NavBar;
