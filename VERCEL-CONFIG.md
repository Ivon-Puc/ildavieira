# 🌐 Configuração de Environment Variables na Vercel

## 📋 Passo a Passo para Configurar no Painel da Vercel

### 1. Acessar o Painel da Vercel

1. Acesse: https://vercel.com/dashboard
2. Faça login com sua conta
3. Selecione o projeto `ildavieira` (ou nome do seu projeto)

### 2. Navegar até Environment Variables

1. No projeto, clique na aba **"Settings"**
2. No menu lateral esquerdo, clique em **"Environment Variables"**

### 3. Adicionar as Variáveis do Cloudinary

Adicione **EXATAMENTE** essas variáveis (uma por vez):

#### Variável 1: Cloud Name

- **Name**: `VITE_CLOUDINARY_CLOUD_NAME`
- **Value**: `ildavieira`
- **Environment**: ✅ Production ✅ Preview ✅ Development

#### Variável 2: API Key

- **Name**: `VITE_CLOUDINARY_API_KEY`
- **Value**: `361293592591255`
- **Environment**: ✅ Production ✅ Preview ✅ Development

#### Variável 3: API Secret (SENSÍVEL)

- **Name**: `CLOUDINARY_API_SECRET`
- **Value**: `Z972wKlL3_kgJ66Uf-Srz-rMC0o`
- **Environment**: ✅ Production ✅ Preview ✅ Development

#### Variável 4: Upload Preset

- **Name**: `VITE_CLOUDINARY_UPLOAD_PRESET`
- **Value**: `ildavieira_preset`
- **Environment**: ✅ Production ✅ Preview ✅ Development

#### Variável 5: Site URL

- **Name**: `VITE_SITE_URL`
- **Value**: `https://ildavieiravilela.com.br`
- **Environment**: ✅ Production ✅ Preview

#### Variável 6: Node Environment

- **Name**: `NODE_ENV`
- **Value**: `production`
- **Environment**: ✅ Production

## ⚠️ IMPORTANTE - Segurança

### ✅ Variáveis Seguras (podem ser expostas no frontend):

- `VITE_CLOUDINARY_CLOUD_NAME`
- `VITE_CLOUDINARY_API_KEY`
- `VITE_CLOUDINARY_UPLOAD_PRESET`
- `VITE_SITE_URL`

### 🔒 Variáveis Privadas (NUNCA expor no frontend):

- `CLOUDINARY_API_SECRET`

**NOTA**: Variáveis com prefixo `VITE_` são automaticamente expostas no frontend do Vite.

## 🚨 Checklist Final

Após adicionar todas as variáveis:

- [ ] ✅ 6 variáveis adicionadas no painel da Vercel
- [ ] ✅ Ambientes corretos selecionados para cada variável
- [ ] ✅ Values exatos copiados (sem espaços extras)
- [ ] ✅ Nomes das variáveis exatos (case-sensitive)

## 🔄 Aplicar as Mudanças

Após configurar as variáveis:

1. **Redeploy automático**: A Vercel redeploya automaticamente
2. **Forçar redeploy**: Se necessário, vá em "Deployments" → Clique nos 3 pontos → "Redeploy"

## 🧪 Testar as Variáveis

Para verificar se as variáveis estão funcionando:

1. Aguarde o deploy terminar
2. Acesse: https://ildavieiravilela.com.br
3. Verifique se as imagens carregam corretamente
4. Abra o DevTools (F12) → Console
5. Digite: `import.meta.env` (deve mostrar as variáveis VITE\_)

## 📝 Exemplo de Configuração no Painel

```
Environment Variables (6 total)

VITE_CLOUDINARY_CLOUD_NAME    = ildavieira                  [Production, Preview, Development]
VITE_CLOUDINARY_API_KEY       = 361293592591255             [Production, Preview, Development]
CLOUDINARY_API_SECRET         = Z972wKlL3_kgJ66Uf-Srz...    [Production, Preview, Development]
VITE_CLOUDINARY_UPLOAD_PRESET = ildavieira_preset           [Production, Preview, Development]
VITE_SITE_URL                 = https://ildavieiravilela... [Production, Preview]
NODE_ENV                      = production                   [Production]
```

## 🆘 Resolução de Problemas

### Problema: Imagens não carregam após deploy

**Solução**: Verifique se todas as 6 variáveis foram adicionadas corretamente

### Problema: Variável não aparece no código

**Solução**: Certifique-se que variáveis do frontend têm prefixo `VITE_`

### Problema: Deploy falha

**Solução**: Verifique se não há espaços extras nos values das variáveis

---

**📞 Suporte**: Se precisar de ajuda, verifique os logs de deployment na aba "Functions" do projeto na Vercel.
