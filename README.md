# Mina Acessórios

Site vitrine em Angular para laços de cabelo e acessórios femininos, pronto para receber integração futura de carrinho e pagamento via PayPal.

## Requisitos

- Node.js 18+
- npm 9+ ou compatível

## Como rodar

```bash
npm install
npm start
```

O aplicativo será servido em `http://localhost:4200/`.

### Build de produção

```bash
npm run build
```

Os arquivos otimizados ficam em `dist/minacessorios/`.

## Estrutura

- `src/app`: componentes e páginas (home com carrossel, cards e destaques).
- `src/assets`: ilustrações SVG usadas nas vitrines.
- `src/styles.scss`: estilos globais e tokens básicos.

## Próximos passos

- Integrar autenticação e carrinho.
- Conectar o checkout ao PayPal.
- Adicionar catálogo dinâmico carregado de uma API.
