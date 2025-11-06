import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { getCloudinaryUrl, SCHOOL_IMAGES } from '../utils/cloudinary'
import './Home.scss'

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [coursesRef, coursesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [numbersRef, numbersInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const stats = [
    { number: '1000+', label: 'Alunos Matriculados', icon: '👥' },
    { number: '90%', label: 'Taxa de Empregabilidade', icon: '📈' },
    { number: '4', label: 'Cursos Técnicos', icon: '🎓' },
    { number: '10+', label: 'Anos de Excelência', icon: '⭐' }
  ]

  const highlights = [
    {
      title: 'Infraestrutura Moderna',
      description: 'Laboratórios equipados, quadra coberta, biblioteca e salas climatizadas.',
      icon: '🏢',
      image: SCHOOL_IMAGES.laboratorioFarmacia
    },
    {
      title: 'Corpo Docente Qualificado',
      description: 'Professores especialistas e mestres com experiência de mercado.',
      icon: '👨‍🏫',
      image: SCHOOL_IMAGES.salaAula
    },
    {
      title: 'Inclusão e Acessibilidade',
      description: 'Sala de recursos para PCDs com atendimento especializado.',
      icon: '♿',
      image: SCHOOL_IMAGES.biblioteca
    }
  ]

  return (
    <>
      <Helmet>
        <title>Escola Ilda Vieira Vilela - Educação que Transforma Vidas</title>
        <meta 
          name="description" 
          content="Escola Estadual Ilda Vieira Vilela no Grajaú, Cocaia. Cursos técnicos em Desenvolvimento de Sistemas, Vendas, Logística e Farmácia. 90% de empregabilidade." 
        />
        <meta name="keywords" content="escola técnica grajaú, cursos técnicos cocaia, ilda vieira vilela, desenvolvimento sistemas, vendas, logística, farmácia" />
        <link rel="canonical" href={`${import.meta.env.VITE_SITE_URL || 'https://ildavieiravilela.com.br'}/`} />
      </Helmet>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero__background">
          <img 
            src={getCloudinaryUrl(SCHOOL_IMAGES.hero, { width: 1920, height: 1080 })}
            alt="Fachada da Escola Ilda Vieira Vilela"
            className="hero__bg-image"
            loading="eager"
          />
          <div className="hero__overlay"></div>
        </div>
        
        <div className="container">
          <motion.div 
            className="hero__content"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero__title">
              Seu Futuro Brilhante Começa na 
              <span className="hero__title-highlight"> Ilda Vieira Vilela!</span>
            </h1>
            <p className="hero__subtitle">
              Educação de excelência com foco na empregabilidade. 
              Cursos técnicos que transformam vidas no coração do Grajaú.
            </p>
            <div className="hero__actions">
              <Link to="/cursos" className="btn btn-primary btn-large">
                Conheça Nossos Cursos
              </Link>
              <Link to="/contato" className="btn btn-outline btn-large">
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" ref={aboutRef}>
        <div className="container">
          <motion.div 
            className="about__content"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="about__text">
              <h2 className="about__title">
                Excelência e Inovação no Coração do Grajaú
              </h2>
              <p className="about__description">
                A Escola Estadual Ilda Vieira Vilela é referência em educação técnica 
                na região do Grajaú, Cocaia. Nossa missão é formar profissionais 
                qualificados e preparados para os desafios do mercado de trabalho.
              </p>
              <p className="about__description">
                Com uma infraestrutura moderna, corpo docente qualificado e metodologia 
                focada na prática, alcançamos uma impressionante taxa de <strong>90% de empregabilidade</strong> 
                entre nossos formandos.
              </p>
              <Link to="/nossa-escola" className="btn btn-secondary">
                Conheça Nossa História
              </Link>
            </div>
            <div className="about__image">
              <img 
                src={getCloudinaryUrl(SCHOOL_IMAGES.entradaPrincipal, { width: 600, height: 400 })}
                alt="Entrada principal da Escola Ilda Vieira Vilela"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" ref={numbersRef}>
        <div className="container">
          <motion.h2 
            className="stats__title"
            initial={{ opacity: 0, y: 30 }}
            animate={numbersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Números que Fazem a Diferença
          </motion.h2>
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="stats__item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={numbersInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stats__icon">{stat.icon}</div>
                <div className="stats__number">{stat.number}</div>
                <div className="stats__label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="container">
          <h2 className="highlights__title">Nossos Diferenciais</h2>
          <div className="highlights__grid">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={highlight.title}
                className="highlights__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="highlights__card-image">
                  <img 
                    src={getCloudinaryUrl(highlight.image, { width: 400, height: 250 })}
                    alt={highlight.title}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Use uma imagem de placeholder relacionada ao tema educacional
                      const placeholders = [
                        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop&crop=center', // Classroom
                        'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=250&fit=crop&crop=center', // Teachers
                        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center'  // Library
                      ];
                      target.src = placeholders[index] || placeholders[0];
                    }}
                  />
                  <div className="highlights__card-icon">{highlight.icon}</div>
                </div>
                <div className="highlights__card-content">
                  <h3 className="highlights__card-title">{highlight.title}</h3>
                  <p className="highlights__card-description">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="courses-preview" ref={coursesRef}>
        <div className="container">
          <motion.div 
            className="courses-preview__content"
            initial={{ opacity: 0, y: 30 }}
            animate={coursesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="courses-preview__title">Cursos Técnicos</h2>
            <p className="courses-preview__subtitle">
              Invista nas áreas mais promissoras do mercado com nossa certificação reconhecida.
            </p>
            <div className="courses-preview__grid">
              <div className="course-card">
                <div className="course-card__icon">💻</div>
                <h3 className="course-card__title">Desenvolvimento de Sistemas</h3>
                <p className="course-card__description">
                  Programação, banco de dados, desenvolvimento web e mobile.
                </p>
              </div>
              <div className="course-card">
                <div className="course-card__icon">📊</div>
                <h3 className="course-card__title">Técnico em Vendas</h3>
                <p className="course-card__description">
                  Marketing, negociação, atendimento e gestão de relacionamento.
                </p>
              </div>
              <div className="course-card">
                <div className="course-card__icon">📦</div>
                <h3 className="course-card__title">Técnico em Logística</h3>
                <p className="course-card__description">
                  Cadeia de suprimentos, transporte e gestão de estoque.
                </p>
              </div>
              <div className="course-card">
                <div className="course-card__icon">💊</div>
                <h3 className="course-card__title">Técnico em Farmácia</h3>
                <p className="course-card__description">
                  Farmacologia, manipulação e controle de qualidade.
                </p>
              </div>
            </div>
            <div className="courses-preview__action">
              <Link to="/cursos" className="btn btn-primary btn-large">
                Ver Todos os Cursos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div 
            className="cta__content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cta__title">Pronto para Transformar seu Futuro?</h2>
            <p className="cta__description">
              Junte-se a mais de 1000 alunos que escolheram a excelência da Ilda Vieira Vilela.
            </p>
            <Link to="/contato" className="btn btn-secondary btn-large">
              Garanta Sua Vaga Agora!
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home