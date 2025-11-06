import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Informações da Escola */}
          <div className="footer__section">
            <h3 className="footer__title">ESCOLA ILDA VIEIRA VILELA</h3>
            <p className="footer__description">
              Educação de excelência que transforma vidas no coração do Grajaú, Cocaia.
              Formando profissionais qualificados para o mercado de trabalho.
            </p>
            <div className="footer__social">
              <a
                href="https://instagram.com/ildavieiravilela"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram da Escola"
              >
                <span>@ildavieiravilela</span>
              </a>
              <a
                href="https://instagram.com/cria.news"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram do Jornal Cria News"
              >
                <span>@cria.news</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="footer__section">
            <h4 className="footer__subtitle">Links Rápidos</h4>
            <nav className="footer__nav">
              <Link to="/nossa-escola" className="footer__link">Nossa História</Link>
              <Link to="/cursos" className="footer__link">Cursos Técnicos</Link>
              <Link to="/contato" className="footer__link">Fale Conosco</Link>
              <a
                href="https://instagram.com/cria.news"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Cria News
              </a>
            </nav>
          </div>

          {/* Cursos Oferecidos */}
          <div className="footer__section">
            <h4 className="footer__subtitle">Cursos Técnicos</h4>
            <nav className="footer__nav">
              <span className="footer__link">Desenvolvimento de Sistemas</span>
              <span className="footer__link">Técnico em Vendas</span>
              <span className="footer__link">Técnico em Logística</span>
              <span className="footer__link">Técnico em Farmácia</span>
            </nav>
          </div>

          {/* Contato */}
          <div className="footer__section">
            <h4 className="footer__subtitle">Contato</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <strong>Endereço:</strong>
                <span>Estrada Canal de Cocaia, 1699<br />
                Parque Residencial Cocaia<br />
                São Paulo - SP, CEP 04849-032</span>
              </div>
              <div className="footer__contact-item">
                <strong>Telefone:</strong>
                <a href="tel:+551159313172" className="footer__contact-link">
                  (11) 5931-3172
                </a>
              </div>
              <div className="footer__contact-item">
                <strong>Horário de Funcionamento:</strong>
                <span>Segunda a Sexta<br />
                6:45 às 22:50</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              &copy; {currentYear} Escola Estadual Ilda Vieira Vilela. 
              Todos os direitos reservados.
            </p>
            <div className="footer__credits">
              <span>Desenvolvido com ❤️ para a educação</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer