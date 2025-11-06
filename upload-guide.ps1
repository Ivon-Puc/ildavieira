# Script PowerShell para facilitar o upload das imagens para o Cloudinary
# Execute este script na pasta raiz do projeto: .\upload-guide.ps1

Write-Host "🎯 GUIA DE UPLOAD - ESCOLA ILDA VIEIRA VILELA" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "📁 IMAGENS ENCONTRADAS NA PASTA 'imagens/':" -ForegroundColor Yellow
Write-Host ""

# Lista as imagens atuais
$images = Get-ChildItem -Path ".\imagens\" -Include "*.jpg", "*.jpeg", "*.png", "*.webp" -Name
foreach ($image in $images) {
    Write-Host "   $image" -ForegroundColor Gray
}

Write-Host ""
Write-Host "🔄 MAPEAMENTO PARA CLOUDINARY:" -ForegroundColor Green
Write-Host "===============================" -ForegroundColor Green
Write-Host ""
Write-Host "ARQUIVO LOCAL                              → PUBLIC ID NO CLOUDINARY" -ForegroundColor White
Write-Host "────────────────────────────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "corredor erro.webp                        → ildavieira/corredor-estudantes" -ForegroundColor Gray
Write-Host "IMG_5465.jpg                              → ildavieira/escola-fachada-principal" -ForegroundColor Gray
Write-Host "IMG_5482.jpg                              → ildavieira/patio-recreio-escola" -ForegroundColor Gray
Write-Host "IMG_5487.jpg                              → ildavieira/quadra-esportiva-coberta" -ForegroundColor Gray
Write-Host "Labfarm.webp                              → ildavieira/laboratorio-farmacia" -ForegroundColor Gray
Write-Host "patio erro 2.png                          → ildavieira/patio-recreio-escola-2" -ForegroundColor Gray
Write-Host "patio erro.png                            → ildavieira/patio-recreio-escola-3" -ForegroundColor Gray
Write-Host "quadra erro 2.png                        → ildavieira/quadra-esportiva-coberta-2" -ForegroundColor Gray
Write-Host "quadra erro.png                          → ildavieira/quadra-esportiva-coberta-3" -ForegroundColor Gray
Write-Host "refeitorio erro.webp                     → ildavieira/refeitorio-estudantes" -ForegroundColor Gray
Write-Host "refeitorio erroo.webp                    → ildavieira/refeitorio-estudantes-2" -ForegroundColor Gray
Write-Host "sala laboratorio erro.png               → ildavieira/laboratorio-ciencias" -ForegroundColor Gray
Write-Host "WhatsApp Image 2025-10-28 at 8.36.17 AM.jpeg → ildavieira/sala-leitura-biblioteca" -ForegroundColor Gray
Write-Host "WhatsApp Image 2025-10-28 at 8.36.18 AM (1).jpeg → ildavieira/biblioteca-estudantes" -ForegroundColor Gray
Write-Host "WhatsApp Image 2025-10-28 at 8.36.18 AM (2).jpeg → ildavieira/sala-informatica" -ForegroundColor Gray
Write-Host "WhatsApp Image 2025-10-28 at 8.36.18 AM (3).jpeg → ildavieira/laboratorio-quimica" -ForegroundColor Gray
Write-Host "WhatsApp Image 2025-10-28 at 8.36.18 AM (4).jpeg → ildavieira/auditorio-escola" -ForegroundColor Gray
Write-Host "WhatsApp Image 2025-10-28 at 8.36.18 AM.jpeg → ildavieira/secretaria-escola" -ForegroundColor Gray
Write-Host "WhatsApp Image 2025-10-28 at 8.36.19 AM (1).jpeg → ildavieira/entrada-principal" -ForegroundColor Gray
Write-Host "WhatsApp Image 2025-10-28 at 8.36.19 AM (2).jpeg → ildavieira/sala-aula-1" -ForegroundColor Gray
Write-Host "WhatsApp Image 2025-10-28 at 8.36.19 AM.jpeg → ildavieira/diretoria-escola" -ForegroundColor Gray
Write-Host ""

Write-Host "🎯 IMAGEM PRINCIPAL PARA BANNER:" -ForegroundColor Magenta
Write-Host "IMG_5465.jpg → ildavieira/hero-banner" -ForegroundColor Magenta
Write-Host ""

Write-Host "🔗 PRÓXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host "1. Acesse: https://cloudinary.com/console" -ForegroundColor White
Write-Host "2. Vá em 'Media Library' → 'Upload'" -ForegroundColor White
Write-Host "3. Para cada imagem, use o Public ID correspondente da tabela acima" -ForegroundColor White
Write-Host "4. Após upload, execute: npm run dev" -ForegroundColor White
Write-Host "5. Verifique se as imagens aparecem no site" -ForegroundColor White
Write-Host ""

Write-Host "📋 PARA VERIFICAR DEPOIS DO UPLOAD:" -ForegroundColor Cyan
Write-Host "As imagens devem aparecer nas seguintes páginas:" -ForegroundColor White
Write-Host "- Página inicial: Banner hero" -ForegroundColor Gray
Write-Host "- Nossa Escola: Galeria de infraestrutura" -ForegroundColor Gray
Write-Host "- Todas as páginas: Layout responsivo" -ForegroundColor Gray
Write-Host ""

Write-Host "⚠️  IMPORTANTE:" -ForegroundColor Red
Write-Host "Atualmente o site está usando imagens temporárias do Cloudinary." -ForegroundColor Yellow
Write-Host "Após fazer o upload das imagens reais, elas substituirão automaticamente" -ForegroundColor Yellow
Write-Host "as imagens temporárias no site." -ForegroundColor Yellow
Write-Host ""

# Pausa para o usuário ler
Write-Host "Pressione qualquer tecla para continuar..." -ForegroundColor DarkGray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")