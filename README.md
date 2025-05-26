# Produtividade Instantânea

Plataforma de curso gamificado sobre produtividade com NotionAI e Canva AI.

## Configuração

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente (crie um arquivo `.env.local`):
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-here
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   NOTION_TOKEN=your-notion-token
   NOTION_DATABASE_ID=your-notion-database-id
   ```
4. Execute o projeto: `npm run dev`

## Estrutura

- Frontend: Next.js + TypeScript + Tailwind CSS
- Backend: Next.js API Routes
- Banco de Dados: Supabase
- Autenticação: NextAuth.js
- CMS: Notion API
