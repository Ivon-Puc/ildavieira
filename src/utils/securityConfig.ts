// Configurações de segurança adicionais

// HTTPS enforcement para produção
export const enforceHTTPS = (): void => {
  if (
    location.protocol !== 'https:' && 
    location.hostname !== 'localhost' &&
    location.hostname !== '127.0.0.1' &&
    !location.hostname.includes('192.168') &&
    process.env.NODE_ENV === 'production'
  ) {
    location.replace('https:' + window.location.href.substring(window.location.protocol.length))
  }
}

// Content Security Policy Headers
export const getCSPHeaders = (): string => {
  return [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' vercel.live",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    "font-src 'self' fonts.gstatic.com",
    "img-src 'self' res.cloudinary.com data: blob:",
    "frame-src https://dialogflow.cloud.google.com https://console.dialogflow.com",
    "connect-src 'self' vitals.vercel-insights.com vercel.live",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; ')
}

// Verificar se está em ambiente seguro
export const isSecureContext = (): boolean => {
  return window.isSecureContext || location.protocol === 'https:' || location.hostname === 'localhost'
}

// Detectar possíveis ataques
export const detectSuspiciousActivity = (input: string): boolean => {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /eval\(/i,
    /document\.cookie/i,
    /document\.write/i
  ]
  
  return suspiciousPatterns.some(pattern => pattern.test(input))
}

// Log de eventos de segurança
export const logSecurityEvent = (event: string, details?: Record<string, any>): void => {
  if (process.env.NODE_ENV === 'production') {
    console.warn(`[SECURITY] ${event}`, details)
    // Em produção, você pode enviar para um serviço de logging
    // sendToSecurityService({ event, details, timestamp: new Date().toISOString() })
  }
}

// Validação de origem
export const isValidOrigin = (origin: string): boolean => {
  const allowedOrigins = [
    'https://ildavieiravilela.com.br',
    'https://www.ildavieiravilela.com.br',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ]
  
  return allowedOrigins.includes(origin)
}

// Proteção contra timing attacks
export const secureCompare = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false
  
  let result = 0
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  
  return result === 0
}

// Rate limiting melhorado
export class SecureRateLimiter {
  private attempts = new Map<string, { count: number; resetTime: number }>()
  
  isAllowed(key: string, maxAttempts = 5, windowMs = 60000): boolean {
    const now = Date.now()
    const record = this.attempts.get(key)
    
    if (!record || now > record.resetTime) {
      this.attempts.set(key, { count: 1, resetTime: now + windowMs })
      return true
    }
    
    if (record.count >= maxAttempts) {
      logSecurityEvent('Rate limit exceeded', { key, attempts: record.count })
      return false
    }
    
    record.count++
    return true
  }
  
  reset(key: string): void {
    this.attempts.delete(key)
  }
  
  cleanup(): void {
    const now = Date.now()
    for (const [key, record] of this.attempts.entries()) {
      if (now > record.resetTime) {
        this.attempts.delete(key)
      }
    }
  }
}

export const secureRateLimiter = new SecureRateLimiter()

// Executar limpeza periodicamente
if (typeof window !== 'undefined') {
  setInterval(() => {
    secureRateLimiter.cleanup()
  }, 300000) // 5 minutos
}