# Smart Study - Guia de Técnicas de Estudo

Site moderno para venda de guia de técnicas de estudo, com painel administrativo integrado.

## 🚀 Stack Tecnológica

### Frontend (100% estático - Vercel)
- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** v4 para estilos
- **Framer Motion** para animações
- **React Router** para navegação
- **Zustand** para gerenciamento de estado (com persistência local)
- **Recharts** para gráficos no admin
- **Sem backend necessário!** Tudo funciona com localStorage

## 📁 Estrutura do Projeto

```
smartco/
└── frontend/          # App React (Vercel)
    ├── src/
    │   ├── components/
    │   │   ├── admin/      # Componentes do painel admin
    │   │   ├── sections/   # Seções da landing page
    │   │   └── ui/         # Componentes reutilizáveis
    │   ├── pages/
    │   │   ├── admin/      # Páginas do admin
    │   │   └── HomePage.tsx
    │   ├── services/       # Funções de autenticação e analytics
    │   └── stores/         # Zustand stores com persistência
    └── vercel.json
```

## 🛠️ Configuração Local

```bash
cd frontend
npm install
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🌐 Deploy no Vercel

### 1. Conecte ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Import Project"
3. Selecione o repositório `smartco`
4. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 2. Configure variáveis de ambiente (opcional)

Para mudar as credenciais do admin:

- `VITE_ADMIN_EMAIL`: Email do admin (padrão: admin@smart-co.tech)
- `VITE_ADMIN_PASSWORD`: Senha do admin (padrão: admin123)

### 3. Configure o domínio

1. Vá em Settings > Domains
2. Adicione `smart-co.tech`
3. Configure o DNS:

```
@    A     76.76.21.21
www  CNAME cname.vercel-dns.com
```

## 🔐 Painel Admin

Acesse: `https://smart-co.tech/admin`

**Credenciais padrão** (mude nas variáveis de ambiente em produção!):
- Email: `admin@smart-co.tech`
- Senha: `admin123`

### Funcionalidades:
- **Dashboard**: Visão geral de cliques e métricas
- **Conteúdo**: Editar textos, preços e links do site
- **Analytics**: Gráficos de cliques por botão (armazenados localmente)

## 📊 Como Funciona o Tracking

### Armazenamento Local
- Os cliques são salvos no `localStorage` do navegador do visitante
- Os dados do admin são agregados quando você acessa o painel
- Mantém histórico dos últimos 30 dias

### Google Analytics (opcional)
Para analytics mais robustos, adicione o Google Analytics:

1. Crie uma conta em [analytics.google.com](https://analytics.google.com)
2. Copie seu ID de medição (G-XXXXXXXXXX)
3. Edite `frontend/index.html` e descomente o bloco do GA, substituindo `GA_MEASUREMENT_ID`

## 🎨 Customização

### Cores
Edite `/frontend/src/index.css`:

```css
@theme {
  --color-primary-500: #0ea5e9;  /* Cor principal */
  --color-accent-500: #8b5cf6;   /* Cor de destaque */
}
```

### Conteúdo
Use o painel admin em `/admin/content` para editar:
- Títulos e textos
- Preços
- Links de checkout (Hotmart, etc.)

As alterações são salvas automaticamente no navegador.

## 💡 Dicas

1. **Links de checkout**: Use links do Hotmart, Eduzz, Monetizze, etc.
2. **Analytics detalhados**: Configure o Google Analytics para dados mais completos
3. **Imagens**: Adicione imagens na pasta `public/` e use em seu código
4. **SEO**: Edite as meta tags em `index.html`

## 📝 Licença

MIT License

---

Feito com ❤️ para estudantes que querem aprender melhor!
