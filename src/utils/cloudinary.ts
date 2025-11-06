// Configuração do Cloudinary usando Environment Variables
export const CLOUDINARY_CONFIG = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'ildavieira',
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '361293592591255',
  // NOTA: apiSecret não deve ser usado no frontend por segurança
  // Usar apenas no backend/servidor se necessário
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'ildavieira_preset',
} as const

// Utilitário para gerar URL otimizada do Cloudinary
export const getCloudinaryUrl = (
  publicId: string,
  options: {
    width?: number
    height?: number
    quality?: 'auto' | number
    format?: 'auto' | 'webp' | 'jpg' | 'png'
    crop?: 'fill' | 'fit' | 'scale' | 'crop'
    gravity?: 'auto' | 'center' | 'face'
  } = {}
): string => {
  const {
    width = 800,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto'
  } = options

  let transformation = `c_${crop},q_${quality},f_${format}`
  
  if (width) transformation += `,w_${width}`
  if (height) transformation += `,h_${height}`
  if (gravity && crop === 'fill') transformation += `,g_${gravity}`
  
  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/${transformation}/${publicId}`
}

// Mapear nomes das imagens existentes para IDs do Cloudinary
export const SCHOOL_IMAGES = {
  // Imagens principais da escola - IMAGENS REAIS AGORA!
  hero: 'ildavieira/escola-fachada-principal', // Imagem da fachada para banner principal
  corredor: 'ildavieira/corredor-estudantes', // Corredor da escola
  patio: 'ildavieira/patio-recreio-escola', // Pátio de recreio
  quadra: 'ildavieira/quadra-esportiva-coberta', // Quadra esportiva
  refeitorio: 'ildavieira/refeitorio-estudantes', // Refeitório dos estudantes
  laboratorio: 'ildavieira/laboratorio-ciencias', // Laboratório de ciências
  laboratorioFarmacia: 'ildavieira/laboratorio-farmacia', // Laboratório de farmácia
  biblioteca: 'ildavieira/sala-leitura-biblioteca', // Biblioteca/sala de leitura
  salaInformatica: 'ildavieira/sala-informatica', // Sala de informática
  laboratorioQuimica: 'ildavieira/laboratorio-quimica', // Laboratório de química
  auditorio: 'ildavieira/auditorio-escola', // Auditório da escola
  secretaria: 'ildavieira/secretaria-escola', // Secretaria
  entradaPrincipal: 'ildavieira/entrada-principal', // Entrada principal
  salaAula: 'ildavieira/sala-aula-1', // Sala de aula
  diretoria: 'ildavieira/diretoria-escola', // Diretoria
  // Imagens alternativas
  patioAlternativo: 'ildavieira/patio-recreio-escola-2', // Pátio vista 2
  quadraAlternativa: 'ildavieira/quadra-esportiva-coberta-2', // Quadra vista 2
  refeitorioAlternativo: 'ildavieira/refeitorio-estudantes-2', // Refeitório vista 2
  bibliotecaEstudantes: 'ildavieira/biblioteca-estudantes', // Biblioteca com estudantes
} as const

// Utilitário para imagens responsivas
export const getResponsiveImageSet = (publicId: string) => ({
  mobile: getCloudinaryUrl(publicId, { width: 480, height: 320 }),
  tablet: getCloudinaryUrl(publicId, { width: 768, height: 512 }),
  desktop: getCloudinaryUrl(publicId, { width: 1200, height: 800 }),
  large: getCloudinaryUrl(publicId, { width: 1920, height: 1280 })
})

// Placeholder para loading
export const getPlaceholderUrl = (width = 400, height = 300) => 
  `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999" font-family="Arial, sans-serif" font-size="18">
        Carregando...
      </text>
    </svg>
  `)}`