# Smart Study - Guia de Técnicas de Estudo

Site moderno para venda de guia de técnicas de estudo, com painel administrativo integrado.

## 🚀 Stack Tecnológica

### Frontend (Vercel)
- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** v4 para estilos
- **Framer Motion** para animações
- **React Router** para navegação
- **Zustand** para gerenciamento de estado
- **React Query** para cache de dados
- **Recharts** para gráficos no admin

### Backend (Azure App Service)
- **Node.js** + **Express** + **TypeScript**
- **JWT** para autenticação
- Pronto para **Azure Cosmos DB** (opcional)

## 📁 Estrutura do Projeto

```
smartco/
├── frontend/          # App React (Vercel)
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/      # Componentes do painel admin
│   │   │   ├── sections/   # Seções da landing page
│   │   │   └── ui/         # Componentes reutilizáveis
│   │   ├── pages/
│   │   │   ├── admin/      # Páginas do admin
│   │   │   └── HomePage.tsx
│   │   ├── services/       # API calls
│   │   └── stores/         # Zustand stores
│   └── vercel.json
└── backend/           # API Express (Azure)
    └── src/
        ├── routes/
        ├── middleware/
        └── index.ts
```

## 🛠️ Configuração Local

### Frontend

```bash
cd frontend
npm install
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Backend

```bash
cd backend
cp .env.example .env
# Edite o .env com suas configurações
npm install
npm run dev
```

A API estará disponível em `http://localhost:3001`

## 🌐 Deploy

### Frontend no Vercel

1. **Conecte seu repositório GitHub ao Vercel**:
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Import Project"
   - Selecione o repositório `smartco`
   - Configure:
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

2. **Configure as variáveis de ambiente**:
   - `VITE_API_URL`: URL do seu backend na Azure

3. **Configure o domínio customizado**:
   - Vá em Settings > Domains
   - Adicione `smart-co.tech`
   - Configure o DNS conforme instruções do Vercel

### Backend na Azure (Plano Estudante)

1. **Crie um App Service**:
   ```bash
   # Login no Azure
   az login

   # Crie o resource group
   az group create --name smartco-rg --location brazilsouth

   # Crie o App Service Plan (F1 é gratuito)
   az appservice plan create \
     --name smartco-plan \
     --resource-group smartco-rg \
     --sku F1 \
     --is-linux

   # Crie o Web App
   az webapp create \
     --name smartco-api \
     --resource-group smartco-rg \
     --plan smartco-plan \
     --runtime "NODE:20-lts"
   ```

2. **Configure o deploy via GitHub Actions**:

   Crie o arquivo `.github/workflows/azure-deploy.yml`:

   ```yaml
   name: Deploy Backend to Azure

   on:
     push:
       branches: [main]
       paths: ['backend/**']

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '20'

         - name: Install and Build
           run: |
             cd backend
             npm ci
             npm run build

         - name: Deploy to Azure
           uses: azure/webapps-deploy@v2
           with:
             app-name: smartco-api
             publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
             package: backend
   ```

3. **Configure as variáveis de ambiente na Azure**:
   - Portal Azure > App Service > Configuration
   - Adicione:
     - `NODE_ENV`: production
     - `JWT_SECRET`: (gere um secret seguro)
     - `ADMIN_EMAIL`: seu-email@exemplo.com
     - `ADMIN_PASSWORD`: uma-senha-segura
     - `FRONTEND_URL`: https://smart-co.tech

### Configuração do Domínio DNS

No seu provedor de DNS (onde registrou smart-co.tech):

```
# Para o site principal (Vercel)
@    A     76.76.21.21
www  CNAME cname.vercel-dns.com

# Se quiser subdomínio para API (opcional)
api  CNAME smartco-api.azurewebsites.net
```

## 🔐 Painel Admin

Acesse: `https://smart-co.tech/admin`

**Credenciais padrão** (mude em produção!):
- Email: `admin@smart-co.tech`
- Senha: `admin123`

### Funcionalidades:
- **Dashboard**: Visão geral de cliques e métricas
- **Conteúdo**: Editar textos, preços e links do site
- **Analytics**: Gráficos detalhados de cliques por botão

## 📊 Tracking de Cliques

O sistema rastreia automaticamente cliques nos botões de CTA:
- `hero_cta`: Botão principal no topo
- `cta_buy`: Botão de compra no final

Os dados são armazenados e exibidos no painel admin.

## 🎨 Customização

### Cores
Edite `/frontend/src/index.css` para alterar o tema:

```css
@theme {
  --color-primary-500: #0ea5e9;  /* Cor principal */
  --color-accent-500: #8b5cf6;   /* Cor de destaque */
}
```

### Conteúdo
Use o painel admin ou edite `/frontend/src/stores/contentStore.ts` para alterar textos padrão.

## 📝 Licença

MIT License

---

Feito com ❤️ para estudantes que querem aprender melhor!