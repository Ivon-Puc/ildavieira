import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { validateRequired, isValidEmail, isValidPhone, formatPhone, sanitizeHtml, rateLimiter } from '../utils/security'
import type { ContactForm } from '../types'
import './Contato.scss'

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const courses = [
    'Desenvolvimento de Sistemas',
    'Técnico em Vendas',
    'Técnico em Logística',
    'Técnico em Farmácia',
    'Informações Gerais'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    let processedValue = value
    if (name === 'phone') {
      processedValue = formatPhone(value)
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }))
    
    // Limpar erro quando usuário começa a digitar
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {}
    
    // Validar campos obrigatórios
    const nameError = validateRequired(formData.name, 'Nome')
    if (nameError) newErrors.name = nameError
    
    const emailError = validateRequired(formData.email, 'Email')
    if (emailError) {
      newErrors.email = emailError
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    const phoneError = validateRequired(formData.phone, 'Telefone')
    if (phoneError) {
      newErrors.phone = phoneError
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido. Use o formato (11) 99999-9999'
    }
    
    const courseError = validateRequired(formData.course, 'Curso de interesse')
    if (courseError) newErrors.course = courseError
    
    const messageError = validateRequired(formData.message, 'Mensagem')
    if (messageError) newErrors.message = messageError
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Rate limiting
    if (!rateLimiter.isAllowed('contact-form', 3, 300000)) { // 3 tentativas em 5 minutos
      setSubmitStatus('error')
      alert('Muitas tentativas de envio. Tente novamente em alguns minutos.')
      return
    }
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Sanitizar dados antes do envio
      const sanitizedData = {
        ...formData,
        name: sanitizeHtml(formData.name),
        message: sanitizeHtml(formData.message)
      }
      
      // Simular envio do formulário (aqui você integraria com um backend real)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Dados do formulário:', sanitizedData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      })
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contato | Escola Ilda Vieira Vilela - Entre em Contato</title>
        <meta 
          name="description" 
          content="Entre em contato com a Escola Ilda Vieira Vilela. Tire suas dúvidas sobre cursos técnicos, matrículas e inscrições. Estamos no Grajaú, Cocaia." 
        />
        <meta name="keywords" content="contato escola ilda vieira, matrícula cursos técnicos, telefone escola grajaú, informações cursos" />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero page-hero--contact">
        <div className="container">
          <motion.div 
            className="page-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-hero__title">Entre em Contato</h1>
            <p className="page-hero__subtitle">
              Estamos aqui para esclarecer suas dúvidas e ajudar você a dar o próximo passo
            </p>
          </motion.div>
        </div>
      </section>

      <div className="contact-page">
        <div className="container">
          <div className="contact-page__content">
            
            {/* Formulário de Contato */}
            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-form-section__title">Envie sua Mensagem</h2>
              <p className="contact-form-section__description">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
              </p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      placeholder="Digite seu nome completo"
                      maxLength={100}
                      required
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      placeholder="seu@email.com"
                      maxLength={100}
                      required
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                      placeholder="(11) 99999-9999"
                      maxLength={15}
                      required
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="course" className="form-label">
                      Curso de Interesse *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className={`form-input ${errors.course ? 'form-input--error' : ''}`}
                      required
                    >
                      <option value="">Selecione um curso</option>
                      {courses.map(course => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                    {errors.course && <span className="form-error">{errors.course}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    placeholder="Digite sua mensagem ou dúvida..."
                    rows={5}
                    maxLength={500}
                    required
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                  <div className="form-counter">
                    {formData.message.length}/500 caracteres
                  </div>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="form-success">
                    ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="form-error">
                    ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </form>
            </motion.div>
            
            {/* Informações de Contato */}
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-info-section__title">Informações de Contato</h2>
              
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">📍</div>
                  <h3 className="contact-info-card__title">Endereço</h3>
                  <p className="contact-info-card__content">
                    Estrada Canal de Cocaia, 1699<br />
                    Parque Residencial Cocaia<br />
                    São Paulo - SP<br />
                    CEP 04849-032
                  </p>
                </div>
                
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">📞</div>
                  <h3 className="contact-info-card__title">Telefone</h3>
                  <p className="contact-info-card__content">
                    <a href="tel:+551159313172" className="contact-link">
                      (11) 5931-3172
                    </a>
                  </p>
                </div>
                
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">🕐</div>
                  <h3 className="contact-info-card__title">Horário de Funcionamento</h3>
                  <p className="contact-info-card__content">
                    <strong>Segunda a Sexta:</strong><br />
                    6:45 às 22:50<br /><br />
                    
                    <strong>Secretaria:</strong><br />
                    8:00 às 17:00
                  </p>
                </div>
                
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">📱</div>
                  <h3 className="contact-info-card__title">Redes Sociais</h3>
                  <p className="contact-info-card__content">
                    <a 
                      href="https://instagram.com/ildavieiravilela" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      @ildavieiravilela
                    </a><br />
                    <a 
                      href="https://instagram.com/cria.news" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      @cria.news
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Horários por Período */}
              <div className="schedule-info">
                <h3 className="schedule-info__title">Horários de Aulas</h3>
                <div className="schedule-grid">
                  <div className="schedule-item">
                    <h4 className="schedule-item__period">Manhã</h4>
                    <p className="schedule-item__time">7:00 às 12:20</p>
                    <p className="schedule-item__gate">Portão: 6:50 às 7:00</p>
                  </div>
                  <div className="schedule-item">
                    <h4 className="schedule-item__period">Tarde</h4>
                    <p className="schedule-item__time">13:00 às 18:20</p>
                    <p className="schedule-item__gate">Portão: 12:50 às 13:00</p>
                  </div>
                  <div className="schedule-item">
                    <h4 className="schedule-item__period">Noite</h4>
                    <p className="schedule-item__time">19:00 às 22:50</p>
                    <p className="schedule-item__gate">Portão: 18:50 às 19:00</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contato