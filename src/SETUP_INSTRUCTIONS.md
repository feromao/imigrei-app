# Instruções de Configuração - Animação de Texto

Para usar a funcionalidade de animação de texto no projeto Imigrei, você precisa instalar as seguintes dependências:

## Dependências Necessárias

Execute o comando abaixo no terminal do seu projeto:

```bash
npm install motion clsx tailwind-merge @radix-ui/react-slot class-variance-authority
```

### Explicação das dependências:

- **motion**: Biblioteca de animação para React (successor do Framer Motion)
- **clsx**: Utilitário para construir classes CSS condicionalmente  
- **tailwind-merge**: Mescla classes Tailwind de forma inteligente
- **@radix-ui/react-slot**: Componente utilitário para composição
- **class-variance-authority**: Sistema de variantes para componentes

## Arquivos Criados

1. `/lib/utils.ts` - Função utilitária para mesclar classes CSS
2. `/components/AnimatedHeroText.tsx` - Componente com animação de texto
3. `/components/Home.tsx` - Atualizado para usar o texto animado

## Funcionalidade

O texto animado alterna entre as seguintes frases a cada 2 segundos:
- "na Irlanda"
- "na Europa" 
- "em Malta"
- "no mundo todo"

As animações usam efeitos de spring com transições suaves, mantendo as cores do design system do Imigrei (#B0FF0B para o texto animado).