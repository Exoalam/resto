import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          My APP
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/innovation">Innovation</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;