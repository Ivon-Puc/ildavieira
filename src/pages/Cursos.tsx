import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCloudinaryUrl, SCHOOL_IMAGES } from '../utils/cloudinary'
import type { Course } from '../types'
import './Cursos.scss'

const Cursos: React.FC = () => {
  const courses: Course[] = [
    {
      id: 'desenvolvimento-sistemas',
      title: 'Desenvolvimento de Sistemas',
      description: 'Forme-se um profissional completo em programação e desenvolvimento de software.',
      duration: '3 semestres',
      shift: '2°TC e 3°TA',
      skills: [
        'Lógica de Programação e Algoritmos',
        'Linguagens: Python, Java, C#, JavaScript',
        'Banco de Dados SQL e NoSQL',
        'Desenvolvimento Web (Front-end e Back-end)',
        'Engenharia de Software e Metodologias Ágeis',
        'Sistemas Operacionais',
        'Redes de Computadores e Segurança'
      ],
      marketDemand: 'alta',
      employabilityRate: 95
    },
    {
      id: 'vendas',
      title: 'Técnico em Vendas',
      description: 'Desenvolva habilidades em vendas, marketing e relacionamento com clientes.',
      duration: '3 semestres',
      shift: '2°TE e 3°TC',
      skills: [
        'Técnicas de Vendas e Negociação',
        'Marketing Digital e Tradicional',
        'Atendimento ao Cliente',
        'Gestão de Vendas e Metas',
        'Comportamento do Consumidor',
        'Comunicação e Persuasão',
        'Gestão de Relacionamento (CRM)'
      ],
      marketDemand: 'alta',
      employabilityRate: 88
    },
    {
      id: 'logistica',
      title: 'Técnico em Logística',
      description: 'Especialize-se na gestão da cadeia de suprimentos e operações logísticas.',
      duration: '3 semestres',
      shift: '2°TD e 3°TB',
      skills: [
        'Gestão da Cadeia de Suprimentos',
        'Transporte e Distribuição',
        'Armazenagem e Controle de Estoque',
        'Sistemas de Gestão Logística',
        'Matemática Financeira Aplicada',
        'Processos Gerenciais',
        'Legislação Tributária e Aduaneira'
      ],
      marketDemand: 'alta',
      employabilityRate: 85
    },
    {
      id: 'farmacia',
      title: 'Técnico em Farmácia',
      description: 'Atue na área farmacêutica com conhecimento em medicamentos e manipulação.',
      duration: '3 semestres',
      shift: '2°TA',
      skills: [
        'Farmacologia e Farmacotécnica',
        'Química e Biologia Aplicada',
        'Manipulação de Medicamentos',
        'Controle de Estoque e Qualidade',
        'Biossegurança Farmacêutica',
        'Atendimento ao Cliente',
        'Legislação Farmacêutica'
      ],
      marketDemand: 'alta',
      employabilityRate: 92
    }
  ]

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'alta': return 'var(--success)'
      case 'média': return 'var(--warning)'
      default: return 'var(--gray-500)'
    }
  }

  const getCourseIcon = (courseId: string) => {
    switch (courseId) {
      case 'desenvolvimento-sistemas': return '💻'
      case 'vendas': return '📊'
      case 'logistica': return '📦'
      case 'farmacia': return '💊'
      default: return '🎓'
    }
  }

  return (
    <>
      <Helmet>
        <title>Cursos Técnicos | Ilda Vieira Vilela - Formação Profissional</title>
        <meta 
          name="description" 
          content="Cursos técnicos em Desenvolvimento de Sistemas, Vendas, Logística e Farmácia. Alta empregabilidade e infraestrutura moderna na Escola Ilda Vieira Vilela." 
        />
        <meta name="keywords" content="cursos técnicos, desenvolvimento sistemas, vendas, logística, farmácia, grajaú, cocaia" />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero__background">
          <img 
            src={getCloudinaryUrl(SCHOOL_IMAGES.salaInformatica, { width: 1920, height: 600 })}
            alt="Sala de informática da Escola Ilda Vieira Vilela"
            className="page-hero__bg-image"
          />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="page-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-hero__title">Cursos Técnicos</h1>
            <p className="page-hero__subtitle">
              Invista nas áreas mais promissoras do mercado com nossa certificação reconhecida
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="courses-intro">
        <div className="container">
          <motion.div 
            className="courses-intro__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="courses-intro__title">
              Formação Técnica com Alta Empregabilidade
            </h2>
            <p className="courses-intro__description">
              Nossos cursos técnicos são desenvolvidos em parceria com o mercado de trabalho, 
              garantindo que você saia preparado para as demandas reais das empresas. 
              Com uma taxa média de <strong>90% de empregabilidade</strong>, nossos formandos 
              conquistam posições em empresas de destaque na região metropolitana de São Paulo.
            </p>
            <div className="courses-intro__stats">
              <div className="stat-item">
                <div className="stat-item__number">90%</div>
                <div className="stat-item__label">Taxa de Empregabilidade</div>
              </div>
              <div className="stat-item">
                <div className="stat-item__number">4</div>
                <div className="stat-item__label">Cursos Disponíveis</div>
              </div>
              <div className="stat-item">
                <div className="stat-item__number">3</div>
                <div className="stat-item__label">Semestres</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid">
        <div className="container">
          <div className="courses-grid__list">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id}
                className="course-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="course-card__header">
                  <div className="course-card__icon">
                    {getCourseIcon(course.id)}
                  </div>
                  <div className="course-card__badge">
                    <span className="course-card__shift">{course.shift}</span>
                    <span 
                      className="course-card__demand"
                      style={{ backgroundColor: getDemandColor(course.marketDemand) }}
                    >
                      Demanda {course.marketDemand}
                    </span>
                  </div>
                </div>
                
                <div className="course-card__content">
                  <h3 className="course-card__title">{course.title}</h3>
                  <p className="course-card__description">{course.description}</p>
                  
                  <div className="course-card__info">
                    <div className="course-info-item">
                      <span className="course-info-item__label">Duração:</span>
                      <span className="course-info-item__value">{course.duration}</span>
                    </div>
                    <div className="course-info-item">
                      <span className="course-info-item__label">Empregabilidade:</span>
                      <span className="course-info-item__value">{course.employabilityRate}%</span>
                    </div>
                  </div>

                  <div className="course-card__skills">
                    <h4 className="course-card__skills-title">O que você vai aprender:</h4>
                    <ul className="course-card__skills-list">
                      {course.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="course-card__skill">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="course-card__footer">
                  <Link to="/contato" className="btn btn-primary">
                    Saiba Mais
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="course-benefits">
        <div className="container">
          <motion.h2 
            className="course-benefits__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Por que Escolher a Ilda Vieira Vilela?
          </motion.h2>
          
          <div className="benefits-grid">
            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="benefit-card__icon">🏭</div>
              <h3 className="benefit-card__title">Laboratórios Modernos</h3>
              <p className="benefit-card__description">
                Equipamentos atualizados e ambiente profissional para prática real.
              </p>
            </motion.div>

            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="benefit-card__icon">👨‍🏫</div>
              <h3 className="benefit-card__title">Professores Especialistas</h3>
              <p className="benefit-card__description">
                Corpo docente formado por profissionais com experiência de mercado.
              </p>
            </motion.div>

            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="benefit-card__icon">🤝</div>
              <h3 className="benefit-card__title">Parcerias com Empresas</h3>
              <p className="benefit-card__description">
                Conexões diretas com o mercado de trabalho e oportunidades de estágio.
              </p>
            </motion.div>

            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="benefit-card__icon">📊</div>
              <h3 className="benefit-card__title">Metodologia Prática</h3>
              <p className="benefit-card__description">
                Aprendizado baseado em projetos reais e cases do mercado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="courses-cta">
        <div className="container">
          <motion.div 
            className="courses-cta__content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="courses-cta__title">
              Pronto para Iniciar sua Carreira Técnica?
            </h2>
            <p className="courses-cta__description">
              Entre em contato conosco e garanta sua vaga em um dos cursos mais procurados do mercado.
            </p>
            <div className="courses-cta__actions">
              <Link to="/contato" className="btn btn-primary btn-large">
                Inscreva-se Agora
              </Link>
              <Link to="/nossa-escola" className="btn btn-outline btn-large">
                Conheça a Escola
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Cursos