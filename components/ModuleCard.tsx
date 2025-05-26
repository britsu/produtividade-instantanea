import Link from 'next/link';
import { Module } from './Dashboard';

export default function ModuleCard({ module }: { module: Module }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
            <p className="text-gray-600 mb-4">{module.description}</p>
          </div>
          <span className="bg-[#A3D9B1] text-white px-3 py-1 rounded-full text-sm font-medium">
            {module.xp_total} XP
          </span>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-[#6AA6D4] h-2.5 rounded-full" style={{ width: module.completed ? '100%' : '0%' }}></div>
          </div>
        </div>
        <Link
          href={`/modules/${module.id}`}
          className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-md font-medium ${
            module.completed ? 'bg-[#A3D9B1] text-white hover:bg-green-500' : 'bg-[#6AA6D4] text-white hover:bg-blue-500'
          }`}
        >
          {module.completed ? 'Revisar Módulo' : 'Começar Módulo'}
        </Link>
      </div>
    </div>
  );
}
