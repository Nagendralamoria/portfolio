import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-2 bg-dark-secondary-background text-primary-text text-sm">
      <ul className="col-span-3 flex gap-6">
        <li className="hover:text-white">
          <Link href="/" passHref>
            Hello
          </Link>
        </li>
        <li className="hover:text-white">
          <Link href="/" passHref>
            About
          </Link>
        </li>
        <li className="hover:text-white">
          <Link href="/" passHref>
            Projects
          </Link>
        </li>
        <li className="hover:text-white">
          <Link href="/" passHref>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
