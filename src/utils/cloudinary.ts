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
  // Imagens principais da escola (faça upload das imagens da pasta 'imagens/' com estes nomes)
  hero: 'samples/landscapes/beach-boat', // Temporário - substitua pela imagem da fachada
  corredor: 'samples/landscapes/architecture-signs', // Temporário - substitua pela imagem do corredor
  patio: 'samples/landscapes/nature-mountains', // Temporário - substitua pela imagem do pátio
  quadra: 'samples/people/kitchen-bar', // Temporário - substitua pela imagem da quadra
  refeitorio: 'samples/food/dessert', // Temporário - substitua pela imagem do refeitório
  laboratorio: 'samples/people/smiling-man', // Temporário - substitua pela imagem do laboratório
  laboratorioFarmacia: 'samples/animals/three-dogs', // Temporário - substitua pela imagem do lab de farmácia
  biblioteca: 'samples/landscapes/girl-urban-view', // Temporário - substitua pela imagem da biblioteca
  salaPcd: 'samples/people/boy-snow-hoodie', // Temporário - substitua pela imagem da sala PCD
  diretoria: 'samples/cloudinary-icon', // Temporário - substitua pela imagem da diretoria
  // Logos e identidade visual
  logo: 'samples/logo', // Temporário - substitua pelo logo da escola
  brasao: 'samples/cloudinary-group-photo' // Temporário - substitua pelo brasão
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