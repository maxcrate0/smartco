// API configuration for reviews
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const PRODUCT_ID = 'guia-tecnicas-estudo';

export interface Review {
  id: string;
  productId: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
  verified: boolean;
}

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
}

export async function getReviews(): Promise<Review[]> {
  try {
    const response = await fetch(`${API_URL}/api/reviews/${PRODUCT_ID}`);
    if (!response.ok) throw new Error('Failed to fetch reviews');
    return await response.json();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

export async function getAggregateRating(): Promise<AggregateRating> {
  try {
    const response = await fetch(`${API_URL}/api/reviews/${PRODUCT_ID}/aggregate`);
    if (!response.ok) throw new Error('Failed to fetch aggregate rating');
    return await response.json();
  } catch (error) {
    console.error('Error fetching aggregate rating:', error);
    return { ratingValue: 0, reviewCount: 0 };
  }
}

export async function submitReview(data: { name: string; rating: number; comment: string }): Promise<Review | null> {
  try {
    const response = await fetch(`${API_URL}/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, productId: PRODUCT_ID })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to submit review');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
}
