import { useEffect, useState } from 'react';
import ModuleCard from './ModuleCard';

export interface Module {
  id: string;
  title: string;
  description: string;
  xp_total: number;
  order: number;
  completed: boolean;
}

export interface UserProgress {
  total_xp: number;
  streak: number;
  completion_percentage: number;
}

export default function Dashboard() {
  const [modules, setModules] = useState<Module[]>([]);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setModules([
        { id: '1', title: 'Introdução à Produtividade Visual', description: 'Aprenda os fundamentos da produtividade visual', xp_total: 100, order: 1, completed: true },
        { id: '2', title: 'Dominando o NotionAI', description: 'Use templates e automações para turbinar seu fluxo', xp_total: 200, order: 2, completed: false },
      ]);
      setProgress({ total_xp: 100, streak: 3, completion_percentage: 25 });
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Seu Progresso</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#F5F5F5] p-4 rounded-lg"><h3 className="text-lg font-semibold">XP Total</h3><p className="text-3xl font-bold text-[#6AA6D4]">{progress?.total_xp}</p></div>
          <div className="bg-[#F5F5F5] p-4 rounded-lg"><h3 className="text-lg font-semibold">Sequência</h3><p className="text-3xl font-bold text-[#A3D9B1]">{progress?.streak} dias</p></div>
          <div className="bg-[#F5F5F5] p-4 rounded-lg"><h3 className="text-lg font-semibold">Conclusão</h3><p className="text-3xl font-bold text-[#FFD166]">{progress?.completion_percentage}%</p></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(m => <ModuleCard key={m.id} module={m} />)}
      </div>
    </div>
  );
}
