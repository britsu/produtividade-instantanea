import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-[#6AA6D4] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Domine sua Produtividade com NotionAI e Canva AI</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Aprenda técnicas visuais de produtividade em um curso gamificado estilo Duolingo.
        </p>
        <Link
          href="/dashboard"
          className="bg-[#FFD166] text-gray-800 px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
        >
          Começar Agora
        </Link>
      </div>
    </div>
  );
}
