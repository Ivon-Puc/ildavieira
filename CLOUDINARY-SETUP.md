# 📸 Instruções para Upload das Imagens no Cloudinary

## Configuração Inicial

Acesse sua conta Cloudinary com as credenciais:

- **Cloud Name**: ildavieira
- **API Key**: 361293592591255
- **API Secret**: Z972wKlL3_kgJ66Uf-Srz-rMC0o

## Upload das Imagens

### 1. Organize suas imagens locais

Renomeie as imagens da pasta `imagens/` seguindo este padrão:

```
// IMAGENS ATUAIS NA PASTA → NOVOS NOMES NO CLOUDINARY

// Imagens principais da escola
corredor erro.webp → ildavieira/corredor-estudantes
IMG_5465.jpg → ildavieira/escola-fachada-principal
IMG_5482.jpg → ildavieira/patio-recreio-escola
IMG_5487.jpg → ildavieira/quadra-esportiva-coberta
Labfarm.webp → ildavieira/laboratorio-farmacia
patio erro 2.png → ildavieira/patio-recreio-escola-2
patio erro.png → ildavieira/patio-recreio-escola-3
quadra erro 2.png → ildavieira/quadra-esportiva-coberta-2
quadra erro.png → ildavieira/quadra-esportiva-coberta-3
refeitorio erro.webp → ildavieira/refeitorio-estudantes
refeitorio erroo.webp → ildavieira/refeitorio-estudantes-2
sala laboratorio erro.png → ildavieira/laboratorio-ciencias

// Imagens WhatsApp (renomear conforme conteúdo)
WhatsApp Image 2025-10-28 at 8.36.17 AM.jpeg → ildavieira/sala-leitura-biblioteca
WhatsApp Image 2025-10-28 at 8.36.18 AM (1).jpeg → ildavieira/biblioteca-estudantes
WhatsApp Image 2025-10-28 at 8.36.18 AM (2).jpeg → ildavieira/sala-informatica
WhatsApp Image 2025-10-28 at 8.36.18 AM (3).jpeg → ildavieira/laboratorio-quimica
WhatsApp Image 2025-10-28 at 8.36.18 AM (4).jpeg → ildavieira/auditorio-escola
WhatsApp Image 2025-10-28 at 8.36.18 AM.jpeg → ildavieira/secretaria-escola
WhatsApp Image 2025-10-28 at 8.36.19 AM (1).jpeg → ildavieira/entrada-principal
WhatsApp Image 2025-10-28 at 8.36.19 AM (2).jpeg → ildavieira/sala-aula-1
WhatsApp Image 2025-10-28 at 8.36.19 AM.jpeg → ildavieira/diretoria-escola

// IMPORTANTE: Escolha uma das imagens principais para usar como:
// - Banner da página inicial (hero): sugiro IMG_5465.jpg (fachada) → ildavieira/hero-banner
```

### 2. Upload via Interface Web

1. Acesse: https://cloudinary.com/console
2. Faça login com suas credenciais
3. Vá em "Media Library"
4. Clique em "Upload"
5. Arraste e solte suas imagens OU clique em "Select files"
6. **IMPORTANTE**: Para cada imagem, antes de confirmar o upload:
   - Clique no campo "Public ID"
   - Digite o nome correspondente da tabela acima (ex: `ildavieira/escola-fachada-principal`)
   - Confirme o upload

### 2.1. Upload em Lote (Recomendado)

Se quiser fazer upload de todas de uma vez:

1. Selecione todas as imagens da pasta `imagens/`
2. No Cloudinary, vá em "Settings" → "Upload"
3. Configure: "Auto-assign public ID" como "Disabled"
4. Faça upload de todas
5. Depois renomeie cada uma individualmente conforme a tabela acima

### 3. Estrutura de Pastas no Cloudinary

Organize as imagens na pasta `ildavieira/`:

```
ildavieira/
├── escola-fachada-principal
├── corredor-estudantes
├── patio-recreio-escola
├── quadra-esportiva-coberta
├── refeitorio-estudantes
├── laboratorio-ciencias
├── laboratorio-farmacia
├── sala-leitura-biblioteca
├── sala-recursos-pcd
├── diretoria-administrativa
├── logo-escola-oficial
└── brasao-sao-paulo
```

### 4. Configurações de Upload Recomendadas

- **Quality**: Auto
- **Format**: Auto (Cloudinary escolherá WebP/AVIF automaticamente)
- **Folder**: ildavieira
- **Auto-optimize**: habilitado
- **Auto-tagging**: habilitado

## Como as Imagens são Usadas no Site

As imagens são automaticamente otimizadas pelo código:

```typescript
// Exemplo de uso
import { getCloudinaryUrl, SCHOOL_IMAGES } from "../utils/cloudinary";

// Gera URL otimizada automaticamente
const imageUrl = getCloudinaryUrl(SCHOOL_IMAGES.hero, {
  width: 1920,
  height: 1080,
  quality: "auto",
  format: "auto",
});
```

## Benefícios da Implementação

✅ **Performance**: Imagens são servidas em formatos modernos (WebP, AVIF)  
✅ **Responsividade**: Diferentes tamanhos para mobile, tablet, desktop  
✅ **Otimização**: Compressão automática sem perda de qualidade  
✅ **CDN Global**: Carregamento rápido em qualquer lugar do mundo  
✅ **Lazy Loading**: Imagens carregam apenas quando necessário

## URLs de Exemplo

Após o upload, as URLs ficam assim:

```
https://res.cloudinary.com/ildavieira/image/upload/c_fill,q_auto,f_auto,w_800/ildavieira/escola-fachada-principal
```

O sistema já está configurado e funcionando - basta fazer o upload das imagens! 🚀
