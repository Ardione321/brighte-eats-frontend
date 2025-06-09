import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/leads">My Leads Project</Link>
        </h1>

        <ul className="flex space-x-6">
          <li>
            <Link href="/leads" className="hover:underline">
              View All Leads
            </Link>
          </li>
          <li>
            <Link href="/create-lead" className="hover:underline">
              Create Lead
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
