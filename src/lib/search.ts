// Importar dados de negócios com fallback
let businessesData: any = [];
try {
  businessesData = require('../data/businesses.json');
} catch (error) {
  console.warn('Não foi possível carregar businesses.json, usando dados mock');
}

export type Negocio = {
  id: number;
  nome: string;
  cidade: string;
  categoria: string;
  descricao: string;
  contato: string;
  logo: string;
};

// Dados mock como fallback (caso o JSON não carregue)
const mockNegocios: Negocio[] = [
  { id: 1, nome: "Sabor do Brasil", cidade: "Valencia", categoria: "Restaurante", descricao: "comida brasileira autêntica", contato: "contato@saborbrasil.com", logo: "" },
  { id: 2, nome: "Nails Brasil", cidade: "Valencia", categoria: "Manicure", descricao: "unhas perfeitas sempre", contato: "agendamento@nailsbrasil.com", logo: "" },
  { id: 3, nome: "Mercadinho Tropical", cidade: "Valencia", categoria: "Mercado", descricao: "produtos brasileiros frescos", contato: "vendas@tropicalmercado.com", logo: "" },
  { id: 4, nome: "Brazilian Pub", cidade: "Dublin", categoria: "Restaurante", descricao: "cerveja música brasileira", contato: "reservas@brazilianpub.ie", logo: "" },
  { id: 5, nome: "Beauty Dublin", cidade: "Dublin", categoria: "Manicure", descricao: "beleza brasileira dublin", contato: "beauty@dublin.ie", logo: "" },
  { id: 6, nome: "Cantina Española", cidade: "Madrid", categoria: "Restaurante", descricao: "fusão brasil espanha", contato: "cantina@espanola.es", logo: "" }
];

// Dataset único - fonte única de verdade
const negociosMock: Negocio[] = Array.isArray(businessesData) && businessesData.length > 0 ? businessesData : mockNegocios;

// Categorias que são consideradas online (aparecem em qualquer cidade)
const CATEGORIAS_ONLINE = ['Contador', 'Aulas'];

// Cache simples para memoização
const cacheResultados = new Map<string, Negocio[]>();
const cacheContagens = new Map<string, { [cidade: string]: number }>();

/**
 * Normaliza uma string para busca (remove acentos, converte para minúscula, remove espaços)
 */
function normalizar(texto: string): string {
  if (!texto) return '';
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '') // Remove acentos
    .trim()
    .replace(/\\s+/g, ' '); // Normaliza espaços
}

/**
 * Verifica se uma string contém outra (busca parcial normalizada)
 */
function contem(texto: string, busca: string): boolean {
  if (!texto || !busca) return false;
  return normalizar(texto).includes(normalizar(busca));
}

/**
 * Verifica se uma categoria é considerada online
 */
function isCategoriaOnline(categoria: string): boolean {
  return CATEGORIAS_ONLINE.some(cat => normalizar(cat) === normalizar(categoria));
}

/**
 * Gera uma chave única para cache
 */
function gerarChaveCache(filtroCidade?: string, filtroCategoria?: string): string {
  return `${filtroCidade || ''}|${filtroCategoria || ''}`;
}

/**
 * Busca negócios com base nos filtros de cidade e categoria
 * 
 * Regras implementadas:
 * 1. Se só cidade: todos os negócios dessa cidade + categorias online
 * 2. Se só categoria: todos os negócios dessa categoria em todas as cidades
 * 3. Se cidade + categoria online: todas as categorias online ignorando cidade
 * 4. Se cidade + categoria presencial: só negócios dessa categoria nessa cidade
 * 5. Sem filtros: todos os negócios
 */
export function buscarNegocios(filtroCidade?: string, filtroCategoria?: string): Negocio[] {
  // Verificar cache primeiro
  const chaveCache = gerarChaveCache(filtroCidade, filtroCategoria);
  if (cacheResultados.has(chaveCache)) {
    return cacheResultados.get(chaveCache)!;
  }

  let resultados: Negocio[] = [];
  
  // Caso 1: Sem filtros - retorna todos
  if (!filtroCidade && !filtroCategoria) {
    resultados = [...negociosMock];
  }
  
  // Caso 2: Só categoria
  else if (filtroCategoria && !filtroCidade) {
    resultados = negociosMock.filter(negocio => 
      contem(negocio.categoria, filtroCategoria)
    );
  }
  
  // Caso 3: Só cidade
  else if (filtroCidade && !filtroCategoria) {
    resultados = negociosMock.filter(negocio => 
      contem(negocio.cidade, filtroCidade) || isCategoriaOnline(negocio.categoria)
    );
  }
  
  // Caso 4: Cidade + categoria
  else if (filtroCidade && filtroCategoria) {
    const categoriaEhOnline = isCategoriaOnline(filtroCategoria);
    
    if (categoriaEhOnline) {
      // Se categoria é online, busca em todas as cidades
      resultados = negociosMock.filter(negocio => 
        contem(negocio.categoria, filtroCategoria)
      );
    } else {
      // Se categoria não é online, busca só na cidade específica
      resultados = negociosMock.filter(negocio => 
        contem(negocio.categoria, filtroCategoria) && 
        contem(negocio.cidade, filtroCidade)
      );
    }
  }
  
  // Armazenar no cache
  cacheResultados.set(chaveCache, resultados);
  
  return resultados;
}

/**
 * Busca negócios com base em uma query de texto livre
 * Detecta automaticamente cidade e categoria na query
 */
export function buscarPorQuery(query: string): Negocio[] {
  if (!query || query.trim() === '') {
    return buscarNegocios();
  }
  
  const queryNormalizada = normalizar(query);
  const palavras = queryNormalizada.split(' ').filter(p => p.length > 0);
  
  // Listas de referência baseadas nos dados reais
  const cidades = obterCidades().map(c => normalizar(c));
  const categorias = obterCategorias().map(c => normalizar(c));
  
  let cidadeDetectada: string | undefined;
  let categoriaDetectada: string | undefined;
  
  // Detecta cidade e categoria nas palavras
  for (const palavra of palavras) {
    // Busca cidade
    if (!cidadeDetectada) {
      const cidadeEncontrada = cidades.find(cidade => 
        cidade.includes(palavra) || palavra.includes(cidade)
      );
      if (cidadeEncontrada) {
        cidadeDetectada = obterCidades().find(c => normalizar(c) === cidadeEncontrada);
      }
    }
    
    // Busca categoria
    if (!categoriaDetectada) {
      const categoriaEncontrada = categorias.find(categoria => 
        categoria.includes(palavra) || palavra.includes(categoria)
      );
      if (categoriaEncontrada) {
        categoriaDetectada = obterCategorias().find(c => normalizar(c) === categoriaEncontrada);
      }
    }
  }
  
  // Se detectou cidade ou categoria, usa busca estruturada
  if (cidadeDetectada || categoriaDetectada) {
    return buscarNegocios(cidadeDetectada, categoriaDetectada);
  }
  
  // Caso contrário, busca texto livre em todos os campos
  return negociosMock.filter(negocio => 
    contem(negocio.nome, query) || 
    contem(negocio.descricao, query) ||
    contem(negocio.categoria, query) ||
    contem(negocio.cidade, query)
  );
}

/**
 * Obtém todas as cidades únicas dos negócios (fonte única)
 */
export function obterCidades(): string[] {
  const cidades = [...new Set(negociosMock.map(n => n.cidade))];
  return cidades.sort();
}

/**
 * Obtém todas as categorias únicas dos negócios (fonte única)
 */
export function obterCategorias(): string[] {
  const categorias = [...new Set(negociosMock.map(n => n.categoria))];
  return categorias.sort();
}

/**
 * Calcula contagens reais de negócios por cidade
 * Inclui categorias online em todas as cidades
 */
export function calcularContagens(): { [cidade: string]: number } {
  const chaveCache = 'contagens_cidades';
  if (cacheContagens.has(chaveCache)) {
    return cacheContagens.get(chaveCache)!;
  }

  const contagens: { [cidade: string]: number } = {};
  const cidades = obterCidades();
  
  cidades.forEach(cidade => {
    // Conta negócios da cidade + categorias online
    const negociosDaCidade = buscarNegocios(cidade);
    contagens[cidade] = negociosDaCidade.length;
  });
  
  cacheContagens.set(chaveCache, contagens);
  return contagens;
}

/**
 * Limpa cache (útil para desenvolvimento)
 */
export function limparCache(): void {
  cacheResultados.clear();
  cacheContagens.clear();
}

/**
 * Obtém o dataset completo (para uso interno)
 */
export function obterTodosNegocios(): Negocio[] {
  return [...negociosMock];
}

// Debug: Log para verificar se os dados foram carregados (apenas em desenvolvimento)
if (process.env.NODE_ENV === 'development') {
  console.log('🔍 Imigrei - Sistema de Busca Carregado:', {
    totalNegocios: negociosMock.length,
    cidades: obterCidades(),
    categorias: obterCategorias(),
    categoriasOnline: CATEGORIAS_ONLINE,
    contagens: calcularContagens()
  });
}