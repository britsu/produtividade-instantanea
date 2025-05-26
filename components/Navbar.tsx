import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-[#6AA6D4]">
                Produtividade Instantânea
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {session ? (
              <>
                <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#6AA6D4]">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#6AA6D4]"
                >
                  Sair
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn()}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#6AA6D4]"
              >
                Entrar
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
