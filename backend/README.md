# SmartCo Backend API

Backend para sistema de avaliações do SmartCo.

## Configuração Local

```bash
cd backend
npm install
npm run dev
```

## Configuração Azure Cosmos DB

Defina as variáveis de ambiente:

```bash
export COSMOS_ENDPOINT="https://seu-cosmosdb.documents.azure.com:443/"
export COSMOS_KEY="sua-chave-primaria"
```

## API Endpoints

### GET /api/reviews/:productId
Retorna todas as avaliações de um produto.

### GET /api/reviews/:productId/aggregate
Retorna a nota média e quantidade de avaliações.

### POST /api/reviews
Cria uma nova avaliação.

```json
{
  "productId": "guia-tecnicas-estudo",
  "name": "João Silva",
  "rating": 5,
  "comment": "Excelente guia!"
}
```

### GET /api/health
Health check do servidor.

## Deploy no Azure

1. Crie um App Service no Azure
2. Crie um Cosmos DB (API NoSQL)
3. Configure as variáveis de ambiente
4. Deploy via GitHub Actions ou Azure CLI
