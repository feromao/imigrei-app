# QA Tests - Imigrei Sistema de Busca

## ✅ Checklist de Testes Manuais

### 1. Busca e Contagens por Cidade

**Teste 1.1: Paris mostra contagem correta**
- [ ] Na home, verificar que Paris mostra 20 negócios no badge
- [ ] Clicar em Paris e verificar que lista exatamente 20 negócios
- [ ] ✅ Contagem do badge = número listado

**Teste 1.2: Valencia mostra contagem correta**
- [ ] Na home, verificar que Valencia mostra 25 negócios no badge  
- [ ] Clicar em Valencia e verificar que lista exatamente 25 negócios
- [ ] ✅ Contagem do badge = número listado

**Teste 1.3: Todas as cidades têm contagem consistente**
- [ ] Dublin: badge mostra X, lista mostra X
- [ ] Madrid: badge mostra X, lista mostra X
- [ ] Sliema: badge mostra X, lista mostra X
- [ ] Lisboa: badge mostra X, lista mostra X

### 2. Filtros Combinados (Cidade + Categoria)

**Teste 2.1: "Restaurante Valencia"**
- [ ] Buscar por "restaurante valencia"
- [ ] Verificar que retorna apenas restaurantes de Valencia
- [ ] ✅ Não aparecem restaurantes de outras cidades

**Teste 2.2: "Manicure Dublin"**
- [ ] Buscar por "manicure dublin" 
- [ ] Verificar que retorna apenas manicures de Dublin
- [ ] ✅ Filtro funciona corretamente

### 3. Categorias Online (Ignoram Cidade)

**Teste 3.1: "Aulas Madrid"**
- [ ] Buscar por "aulas madrid"
- [ ] Verificar que retorna TODAS as aulas (qualquer cidade)
- [ ] ✅ Categorias online ignoram filtro de cidade

**Teste 3.2: "Contador Lisboa"**
- [ ] Buscar por "contador lisboa"
- [ ] Verificar que retorna TODOS os contadores (qualquer cidade)
- [ ] ✅ Categorias online funcionam globalmente

**Teste 3.3: Chips de categoria online**
- [ ] Clicar no chip "Aulas" na home
- [ ] Verificar que vai direto para busca com todas as aulas
- [ ] Clicar no chip "Contador" na home  
- [ ] Verificar que mostra todos os contadores

### 4. Busca com Normalização

**Teste 4.1: Acentos e maiúsculas**
- [ ] Buscar "VALENCIA" → deve funcionar igual a "valencia"
- [ ] Buscar "Valéncia" → deve funcionar igual a "valencia" 
- [ ] Buscar "restaurante" vs "RESTAURANTE" → mesmo resultado
- [ ] ✅ Normalização funciona

**Teste 4.2: Variações de texto**
- [ ] "Valencia restaurante" = "restaurante Valencia"
- [ ] "Dublin manicure" = "manicure Dublin"
- [ ] ✅ Ordem das palavras não importa

### 5. Estados Vazios e UX

**Teste 5.1: Busca sem resultados**
- [ ] Buscar por "xyz123abc" (termo inexistente)
- [ ] Verificar que aparece empty state com ícone
- [ ] Verificar que tem botão "Limpar filtros"
- [ ] ✅ Empty state funciona

**Teste 5.2: Limpar filtros**
- [ ] Fazer busca que retorna vazio
- [ ] Clicar em "Limpar filtros"  
- [ ] Verificar que volta para tela inicial
- [ ] ✅ Botão funciona corretamente

### 6. Consistência Visual dos Cards

**Teste 6.1: Cards na Home**
- [ ] Cards têm layout vertical (grid)
- [ ] Imagem full-width no topo
- [ ] Tipografia Manrope, tracking 0.45px
- [ ] Cores: #005a22, #ff6c0e, #b0ff0b
- [ ] ✅ Design system respeitado

**Teste 6.2: Cards no SearchResults**
- [ ] Cards têm layout horizontal (list)
- [ ] Imagem quadrada na lateral
- [ ] Mesma tipografia e cores da home
- [ ] ✅ Consistência mantida

**Teste 6.3: Cards no BusinessDetails**
- [ ] Seção "Negócios Similares" usa mesmo card
- [ ] Layout horizontal consistente
- [ ] ✅ Reutilização do componente

### 7. URL e Navegação

**Teste 7.1: Deep linking**
- [ ] Buscar "restaurante valencia"
- [ ] Verificar URL: ?q=restaurante&cidade=valencia
- [ ] Copiar URL e abrir em nova aba
- [ ] ✅ Página carrega com mesma busca

**Teste 7.2: Navegação back/forward**
- [ ] Fazer várias buscas
- [ ] Usar botão voltar do navegador
- [ ] Verificar que volta para busca anterior
- [ ] ✅ Histórico funciona

**Teste 7.3: URL params específicos**
- [ ] `?cidade=paris` → lista negócios de Paris
- [ ] `?categoria=aulas` → lista todas as aulas
- [ ] `?online=true` → mostra categorias online
- [ ] ✅ Parâmetros funcionam

### 8. Performance e Cache

**Teste 8.1: Debouncing do input**
- [ ] Digitar rapidamente no campo de busca
- [ ] Verificar que não faz busca a cada caractere
- [ ] Aguardar 300ms, deve fazer busca
- [ ] ✅ Debouncing funciona

**Teste 8.2: Cache de resultados**
- [ ] Fazer mesma busca múltiplas vezes
- [ ] Verificar no console que cache é usado
- [ ] ✅ Performance otimizada

### 9. Casos Especiais

**Teste 9.1: Campo em branco**
- [ ] Deixar busca vazia e pressionar Enter
- [ ] Verificar comportamento (empty state ou home)
- [ ] ✅ Tratamento correto

**Teste 9.2: Apenas espaços**
- [ ] Buscar "   " (apenas espaços)
- [ ] Verificar que é tratado como busca vazia
- [ ] ✅ Normalização remove espaços

**Teste 9.3: Categoria não existente**
- [ ] Buscar "categoria inexistente valencia"
- [ ] Verificar que faz busca por texto livre
- [ ] ✅ Fallback funciona

## 📊 Resultados dos Testes

### ✅ Aprovado
- [ ] Busca por cidade e categoria
- [ ] Contagens consistentes
- [ ] Categorias online 
- [ ] Normalização de texto
- [ ] Estados vazios
- [ ] Consistência visual
- [ ] URL params
- [ ] Performance

### ❌ Reprovado
- [ ] [Descrever problemas encontrados]

### 🔄 Para Revisar
- [ ] [Itens que precisam de ajustes]

## 🎯 Critérios de Aceite

- ✅ Paris na home mostra 20 e lista 20 ao clicar
- ✅ Filtros combinados funcionam (cidade + categoria)  
- ✅ Categorias online ignoram cidade (retornam todas)
- ✅ Cards idênticos (home, resultados, negócio)
- ✅ Empty state e "Limpar filtros" funcionando
- ✅ Input com acento/maiúscula não quebra busca
- ✅ URL reflete filtros (e restaura ao recarregar)
- ✅ Nenhum "resultado fantasma" (conta ≠ lista)

---

**Data do teste:** ___________  
**Testador:** ___________  
**Versão:** ___________  
**Status geral:** ⬜ Aprovado ⬜ Reprovado ⬜ Com ressalvas