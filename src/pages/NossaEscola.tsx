import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { getCloudinaryUrl, SCHOOL_IMAGES } from '../utils/cloudinary'
import './NossaEscola.scss'

const NossaEscola: React.FC = () => {
  const infrastructure = [
    { name: 'Quadra esportiva coberta', image: SCHOOL_IMAGES.quadra, icon: '🏀' },
    { name: 'Laboratório de ciências', image: SCHOOL_IMAGES.laboratorio, icon: '🔬' },
    { name: 'Laboratório de farmácia', image: SCHOOL_IMAGES.laboratorioFarmacia, icon: '💊' },
    { name: 'Laboratório de química', image: SCHOOL_IMAGES.laboratorioQuimica, icon: '⚗️' },
    { name: 'Biblioteca/Sala de leitura', image: SCHOOL_IMAGES.biblioteca, icon: '📚' },
    { name: 'Sala de informática', image: SCHOOL_IMAGES.salaInformatica, icon: '💻' },
    { name: 'Refeitório', image: SCHOOL_IMAGES.refeitorio, icon: '🍽️' },
    { name: 'Pátio coberto e descoberto', image: SCHOOL_IMAGES.patio, icon: '🌳' },
    { name: 'Auditório', image: SCHOOL_IMAGES.auditorio, icon: '🎭' },
    { name: 'Salas de aula climatizadas', image: SCHOOL_IMAGES.salaAula, icon: '🏫' },
    { name: 'Secretaria', image: SCHOOL_IMAGES.secretaria, icon: '📋' },
    { name: 'Entrada principal', image: SCHOOL_IMAGES.entradaPrincipal, icon: '🚪' }
  ]

  const management = [
    { role: 'Diretor', name: 'Jonas Cruz de Azevedo' },
    { role: 'Vice-Diretora', name: 'Cristiano Antunes Macedo' },
    { role: 'Vice-Diretora', name: 'Debora Novaes Alves' },
    { role: 'Vice-Diretora', name: 'Janaina Gomes Ribeiro' },
    { role: 'Coordenador', name: 'Henrique Novais Silva' },
    { role: 'Coordenador', name: 'Matheus Mauricio de Araujo' }
  ]

  return (
    <>
      <Helmet>
        <title>Nossa Escola - História e Infraestrutura | Ilda Vieira Vilela</title>
        <meta 
          name="description" 
          content="Conheça a história da Escola Ilda Vieira Vilela, nossa infraestrutura moderna e o legado de Ilda Vieira Vilela na comunidade do Cocaia, Grajaú." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero__background">
          <img 
            src={getCloudinaryUrl(SCHOOL_IMAGES.hero, { width: 1920, height: 600 })}
            alt="Escola Ilda Vieira Vilela"
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
            <h1 className="page-hero__title">Nossa Escola</h1>
            <p className="page-hero__subtitle">
              História, valores e infraestrutura que transformam vidas
            </p>
          </motion.div>
        </div>
      </section>

      {/* História de Ilda Vieira Vilela */}
      <section className="history">
        <div className="container">
          <motion.div 
            className="history__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="history__text">
              <h2 className="history__title">A História de Ilda Vieira Vilela</h2>
              <div className="history__story">
                <p>
                  Ilda Vieira Vilela era uma moradora do Parque América que se mudou para o extremo sul de São Paulo 
                  junto com seu marido e quatro filhos. Ela sempre esteve envolvida nas questões da comunidade e, 
                  ao ver a situação do antigo "morro da macumba" (nome dado ao Cocaia, Cantinho do Céu e Gaivotas 
                  quando ainda não eram reconhecidos como bairros), decidiu liderar projetos de melhoria para a região.
                </p>
                
                <p>
                  Antes de Ilda chegar, a região era literalmente "terra de ninguém" - apenas mato e lixo, 
                  uma área de extrema pobreza com apenas 3 a 4 moradores. Com a expansão urbana de Santo Amaro, 
                  muitas famílias passaram a ocupar terrenos de forma irregular, enfrentando a falta de infraestrutura básica.
                </p>

                <p>
                  A água, mesmo próxima à represa Billings, não era potável. Os moradores precisavam percorrer 
                  longas distâncias para buscar água, e poucos tinham poços em casa. Isso gerou vários casos de 
                  hepatite B, que inclusive causou a morte de um dos filhos de Ilda.
                </p>

                <p>
                  Com coragem e determinação, Ilda liderou um grupo majoritariamente de mulheres em uma iniciativa 
                  marcante: fizeram um varal na rua com certidões de nascimento de crianças sem matrícula escolar. 
                  Eram mais de 1.600 crianças e jovens sem acesso à educação, mesmo após a construção das escolas 
                  Washington e Aniz Brada.
                </p>

                <p>
                  Ilda não tinha vergonha de enfrentar qualquer desafio. Era uma pessoa brava quando necessário, 
                  mas ao mesmo tempo muito amável e uma ótima amiga. Sua luta não se limitou à educação - ela 
                  batalhou por eletricidade, coleta de lixo, postes de iluminação, água encanada, transporte 
                  público, asfalto e muito mais.
                </p>

                <p>
                  Infelizmente, Ilda faleceu antes da conclusão da escola que hoje leva seu nome 
                  (anteriormente chamada de Cocaia 3). Mas seu legado permanece vivo, e sem ela e outras 
                  lideranças locais, não teríamos metade do que temos hoje no Cocaia.
                </p>
              </div>
            </div>
            <div className="history__image">
              <div className="history__image-placeholder">
                <span className="history__image-icon">👩‍🎓</span>
                <p>Ilda Vieira Vilela<br />Uma Heroína da Educação</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* História da Escola */}
      <section className="school-history">
        <div className="container">
          <motion.div 
            className="school-history__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="school-history__title">História da Escola</h2>
            <div className="school-history__timeline">
              <div className="timeline-item">
                <div className="timeline-item__year">Antes de 2014</div>
                <div className="timeline-item__content">
                  <h3>Extensão do Washington</h3>
                  <p>A escola funcionava como extensão da E.E. Washington Luis, conhecida como "Cocaia 5".</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-item__year">2014</div>
                <div className="timeline-item__content">
                  <h3>Independência da Escola</h3>
                  <p>A escola se tornou independente, deixando de ser uma extensão para funcionar como unidade própria.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-item__year">Hoje</div>
                <div className="timeline-item__content">
                  <h3>Escola Ilda Vieira Vilela</h3>
                  <p>Mais de 1000 alunos matriculados, oferecendo ensino médio e cursos técnicos de qualidade.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="infrastructure">
        <div className="container">
          <motion.h2 
            className="infrastructure__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nossa Infraestrutura
          </motion.h2>
          <div className="infrastructure__grid">
            {infrastructure.map((item, index) => (
              <motion.div 
                key={item.name}
                className="infrastructure__card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="infrastructure__card-image">
                  <img 
                    src={getCloudinaryUrl(item.image, { width: 400, height: 250 })}
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className="infrastructure__card-icon">{item.icon}</div>
                </div>
                <h3 className="infrastructure__card-title">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gestão */}
      <section className="management">
        <div className="container">
          <motion.h2 
            className="management__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nossa Gestão
          </motion.h2>
          <div className="management__grid">
            {management.map((person, index) => (
              <motion.div 
                key={`${person.role}-${person.name}`}
                className="management__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="management__card-icon">👨‍💼</div>
                <h3 className="management__card-role">{person.role}</h3>
                <p className="management__card-name">{person.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações Práticas */}
      <section className="practical-info">
        <div className="container">
          <motion.div 
            className="practical-info__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="practical-info__title">Informações Práticas</h2>
            <div className="practical-info__grid">
              <div className="info-card">
                <h3 className="info-card__title">📍 Localização</h3>
                <p>Estrada Canal de Cocaia, 1699<br />
                Parque Residencial Cocaia<br />
                São Paulo - SP, CEP 04849-032</p>
              </div>
              <div className="info-card">
                <h3 className="info-card__title">📞 Contato</h3>
                <p>Telefone: (11) 5931-3172<br />
                Instagram: @ildavieiravilela<br />
                Jornal: @cria.news</p>
              </div>
              <div className="info-card">
                <h3 className="info-card__title">🕐 Horários</h3>
                <p><strong>Manhã:</strong> 7h às 12h20<br />
                <strong>Tarde:</strong> 13h às 18h20<br />
                <strong>Noite:</strong> 19h às 22h50</p>
              </div>
              <div className="info-card">
                <h3 className="info-card__title">👥 Capacidade</h3>
                <p>Mais de 1000 alunos matriculados<br />
                Ensino Médio Regular<br />
                Cursos Técnicos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NossaEscola