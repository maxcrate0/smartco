const express = require('express');
const cors = require('cors');
const { CosmosClient } = require('@azure/cosmos');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['https://smart-co.tech', 'http://localhost:5173', 'http://localhost:4173'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Azure Cosmos DB Configuration
const cosmosEndpoint = process.env.COSMOS_ENDPOINT || '';
const cosmosKey = process.env.COSMOS_KEY || '';
const databaseId = 'smartco';
const containerId = 'reviews';

let container = null;

// Initialize Cosmos DB (if configured)
async function initCosmosDB() {
  if (cosmosEndpoint && cosmosKey) {
    try {
      const client = new CosmosClient({ endpoint: cosmosEndpoint, key: cosmosKey });
      const { database } = await client.databases.createIfNotExists({ id: databaseId });
      const { container: cosmosContainer } = await database.containers.createIfNotExists({ 
        id: containerId,
        partitionKey: { paths: ['/productId'] }
      });
      container = cosmosContainer;
      console.log('✅ Connected to Azure Cosmos DB');
    } catch (error) {
      console.error('❌ Failed to connect to Cosmos DB:', error.message);
      console.log('⚠️ Running in local mode (in-memory storage)');
    }
  } else {
    console.log('⚠️ Cosmos DB not configured. Running in local mode (in-memory storage)');
  }
}

// In-memory storage for local development
let localReviews = [
  {
    id: '1',
    productId: 'guia-tecnicas-estudo',
    name: 'João Silva',
    rating: 5,
    comment: 'Excelente guia! As técnicas realmente funcionam.',
    createdAt: new Date().toISOString(),
    verified: true
  }
];

// Get all reviews for a product
app.get('/api/reviews/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    
    if (container) {
      const { resources: reviews } = await container.items
        .query({
          query: 'SELECT * FROM c WHERE c.productId = @productId ORDER BY c.createdAt DESC',
          parameters: [{ name: '@productId', value: productId }]
        })
        .fetchAll();
      
      return res.json(reviews);
    }
    
    // Local mode
    const reviews = localReviews.filter(r => r.productId === productId);
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// Get aggregate rating for a product
app.get('/api/reviews/:productId/aggregate', async (req, res) => {
  try {
    const { productId } = req.params;
    let reviews = [];
    
    if (container) {
      const { resources } = await container.items
        .query({
          query: 'SELECT * FROM c WHERE c.productId = @productId',
          parameters: [{ name: '@productId', value: productId }]
        })
        .fetchAll();
      reviews = resources;
    } else {
      reviews = localReviews.filter(r => r.productId === productId);
    }
    
    if (reviews.length === 0) {
      return res.json({ ratingValue: 0, reviewCount: 0 });
    }
    
    const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = (totalRating / reviews.length).toFixed(1);
    
    res.json({
      ratingValue: parseFloat(avgRating),
      reviewCount: reviews.length
    });
  } catch (error) {
    console.error('Error fetching aggregate:', error);
    res.status(500).json({ error: 'Failed to fetch aggregate rating' });
  }
});

// Submit a new review
app.post('/api/reviews', async (req, res) => {
  try {
    const { productId, name, rating, comment } = req.body;
    
    // Validation
    if (!productId || !name || !rating) {
      return res.status(400).json({ error: 'Missing required fields: productId, name, rating' });
    }
    
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }
    
    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({ error: 'Name must be between 2 and 50 characters' });
    }
    
    if (comment && comment.length > 500) {
      return res.status(400).json({ error: 'Comment must be less than 500 characters' });
    }
    
    const review = {
      id: uuidv4(),
      productId,
      name: name.trim(),
      rating: parseInt(rating),
      comment: comment ? comment.trim() : '',
      createdAt: new Date().toISOString(),
      verified: false // Could be verified after purchase confirmation
    };
    
    if (container) {
      await container.items.create(review);
    } else {
      localReviews.push(review);
    }
    
    res.status(201).json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Failed to create review' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    mode: container ? 'azure' : 'local',
    timestamp: new Date().toISOString()
  });
});

// Start server
async function start() {
  await initCosmosDB();
  app.listen(PORT, () => {
    console.log(`🚀 SmartCo API running on port ${PORT}`);
  });
}

start();
