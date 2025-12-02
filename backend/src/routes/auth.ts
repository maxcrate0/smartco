import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const router = Router()

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@smart-co.tech'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

// In production, store hashed password
const hashedPassword = bcrypt.hashSync(ADMIN_PASSWORD, 10)

// Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' })
      return
    }

    if (email !== ADMIN_EMAIL) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    const isValidPassword = await bcrypt.compare(password, hashedPassword)
    if (!isValidPassword) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    const token = jwt.sign(
      { email, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    res.json({ token, email })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Validate token
router.get('/validate', (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'No token provided' })
      return
    }

    const token = authHeader.substring(7)
    const decoded = jwt.verify(token, JWT_SECRET)

    res.json({ valid: true, user: decoded })
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
})

export default router
