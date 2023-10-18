import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <p>Home</p>
      <Link to={'/catalog'}>Book</Link>
    </main>
  );
}
