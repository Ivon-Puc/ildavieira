// Configuração do Cloudinary
export const CLOUDINARY_CONFIG = {
  cloudName: 'ildavieira',
  apiKey: '361293592591255',
  apiSecret: 'Z972wKlL3_kgJ66Uf-Srz-rMC0o',
  uploadPreset: 'ildavieira_preset', // Você precisa criar este preset no Cloudinary
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
  // Renomear as imagens para refletir a escola
  hero: 'ildavieira/escola-fachada-principal',
  corredor: 'ildavieira/corredor-estudantes',
  patio: 'ildavieira/patio-recreio-escola',
  quadra: 'ildavieira/quadra-esportiva-coberta',
  refeitorio: 'ildavieira/refeitorio-estudantes',
  laboratorio: 'ildavieira/laboratorio-ciencias',
  laboratorioFarmacia: 'ildavieira/laboratorio-farmacia',
  biblioteca: 'ildavieira/sala-leitura-biblioteca',
  salaPcd: 'ildavieira/sala-recursos-pcd',
  diretoria: 'ildavieira/diretoria-administrativa',
  // Logos e identidade visual
  logo: 'ildavieira/logo-escola-oficial',
  brasao: 'ildavieira/brasao-sao-paulo'
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