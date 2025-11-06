# 🎓 Escola Ilda Vieira Vilela - Site Oficial

Site oficial da Escola Estadual Ilda Vieira Vilela, localizada no Grajaú, Cocaia - São Paulo. Uma aplicação React moderna, responsiva e segura que apresenta a história da escola, cursos técnicos oferecidos e informações de contato.

## 🌟 Características

### ✨ Design e UX

- **Design Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **Paleta de Cores Personalizada**: Cores que refletem a identidade da escola
- **Animações Suaves**: Transições e animações com Framer Motion
- **Carregamento Otimizado**: Lazy loading e otimização de imagens
- **Acessibilidade**: Compatível com leitores de tela e navegação por teclado

### 🔧 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento rápido
- **React Router DOM** para navegação SPA
- **SCSS** para estilização avançada
- **Framer Motion** para animações
- **React Helmet Async** para SEO
- **Cloudinary** para otimização de imagens
- **DOMPurify** para segurança contra XSS

### 🔒 Segurança

- **Sanitização de Dados**: Proteção contra ataques XSS
- **Rate Limiting**: Controle de tentativas de envio de formulários
- **Validação de Formulários**: Validação tanto client-side quanto server-side
- **Headers de Segurança**: CSP, X-Frame-Options, X-Content-Type-Options
- **HTTPS Ready**: Configurado para produção segura

### 📱 Funcionalidades

- **4 Páginas Principais**: Home, Nossa Escola, Cursos, Contato
- **Formulário de Contato**: Com validação completa e feedback visual
- **Galeria de Imagens**: Integrada com Cloudinary para performance otimizada
- **SEO Otimizado**: Meta tags, structured data e sitemap
- **PWA Ready**: Configurado como Progressive Web App

## 🎨 Paleta de Cores

```scss
// Cores Principais
--primary-teal: #76a6a6; // Verde azulado suave
--secondary-yellow: #f2d338; // Amarelo vibrante
--accent-gold: #d9a404; // Dourado
--warm-orange: #bf7e04; // Laranja quente
--earth-brown: #a65437; // Marrom terroso
```

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Ivon-Puc/ildavieira.git

# Entre no diretório
cd ildavieira

# Instale as dependências
npm install
```

### Configuração do Cloudinary

As imagens são otimizadas via Cloudinary. As configurações já estão definidas em `src/utils/cloudinary.ts`:

```typescript
export const CLOUDINARY_CONFIG = {
  cloudName: "ildavieira",
  apiKey: "361293592591255",
  // API Secret é usado apenas no backend para uploads
};
```

### Executar em Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

### Preview da Build de Produção

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Layout.tsx      # Layout principal
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Footer.tsx      # Rodapé
│   └── *.scss         # Estilos dos componentes
├── pages/              # Páginas da aplicação
│   ├── Home.tsx       # Página inicial
│   ├── NossaEscola.tsx # História da escola
│   ├── Cursos.tsx     # Cursos técnicos
│   ├── Contato.tsx    # Formulário de contato
│   └── *.scss         # Estilos das páginas
├── styles/             # Estilos globais
│   └── globals.scss   # Variáveis e estilos base
├── utils/              # Utilitários
│   ├── cloudinary.ts  # Configuração de imagens
│   └── security.ts    # Funções de segurança
├── types/              # Definições TypeScript
│   └── index.ts       # Interfaces e tipos
├── App.tsx            # Componente raiz
└── main.tsx           # Ponto de entrada
```

## 🏫 Sobre a Escola

A Escola Estadual Ilda Vieira Vilela está localizada no Grajaú, Cocaia - São Paulo, e oferece:

### 📚 Cursos Técnicos

- **Desenvolvimento de Sistemas** (2°TC e 3°TA)
- **Técnico em Vendas** (2°TE e 3°TC)
- **Técnico em Logística** (2°TD e 3°TB)
- **Técnico em Farmácia** (2°TA)

### 🏢 Infraestrutura

- Laboratórios modernos
- Quadra esportiva coberta
- Biblioteca/Sala de leitura
- Refeitório
- Sala de recursos para PCDs
- Pátios coberto e descoberto

### 📞 Contato

- **Endereço**: Estrada Canal de Cocaia, 1699 - Parque Residencial Cocaia
- **CEP**: 04849-032
- **Telefone**: (11) 5931-3172
- **Instagram**: @ildavieiravilela
- **Jornal**: @cria.news

## 🎯 Funcionalidades Implementadas

### Página Inicial (Home)

- Hero section com call-to-action
- Seção "Sobre a Escola" com estatísticas
- Preview dos cursos oferecidos
- Destaques da infraestrutura
- Seção de chamada para ação

### Nossa Escola

- História detalhada de Ilda Vieira Vilela
- Timeline da evolução da escola
- Galeria da infraestrutura
- Informações da gestão escolar
- Dados práticos de funcionamento

### Cursos

- Cards detalhados de cada curso técnico
- Informações sobre empregabilidade
- Habilidades desenvolvidas
- Horários e turmas
- Formulário de interesse

### Contato

- Formulário de contato com validação
- Informações de localização
- Horários de funcionamento
- Redes sociais
- Mapa de horários por período

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Verificação de tipos TypeScript
npm run type-check

# Linting
npm run lint

# Testes (quando implementados)
npm run test
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Netlify

```bash
# Build
npm run build

# Upload da pasta dist/
```

### Hospedagem Tradicional

Após executar `npm run build`, faça upload da pasta `dist/` para seu servidor web.

## 📈 Performance e Otimizações

- **Code Splitting**: Divisão automática do código em chunks
- **Tree Shaking**: Eliminação de código não utilizado
- **Image Optimization**: Otimização automática via Cloudinary
- **Lazy Loading**: Carregamento sob demanda
- **Minificação**: CSS e JS minificados
- **Gzip Compression**: Compressão de assets
- **PWA**: Cache de recursos para acesso offline

## 🔒 Segurança Implementada

- **Content Security Policy**: Proteção contra XSS
- **Data Sanitization**: Limpeza de dados de entrada
- **Rate Limiting**: Controle de tentativas
- **Form Validation**: Validação rigorosa de formulários
- **HTTPS**: Configurado para conexões seguras
- **Headers de Segurança**: Proteções adicionais

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Suporte

Para dúvidas sobre o projeto ou a escola:

- **Email**: contato@ildavieira.edu.br
- **Telefone**: (11) 5931-3172
- **Issues**: [GitHub Issues](https://github.com/Ivon-Puc/ildavieira/issues)

---

**Desenvolvido với ❤️ para a educação**

_Escola Estadual Ilda Vieira Vilela - Educação que Transforma_
