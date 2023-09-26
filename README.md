# API-Pokemon

Este é um projeto no formato API-Rest com as funcionalidades: listar pokemons, dividindo em páginas e detalhar pokemon, apresentando algumas características do pokemon procurado.

## Instalação
Para que a API seja executada instale:
* API: Utils-playground
* Programa: Insomnia
* Biblioteca: express
* Ferramenta: Nodemon

## Passo a passo:

Após fazer a instalação do API, siga os próximos passos:

Para que a primeira funcionalidade seja aplicada, abra o insomnia e crie um HTTP Request com o verbo GET contendo "http://localhost:3000/pokemon" preencha o Query com "pagina" no espaço 'Name' e o número na página desejada em 'Value'.

Para executar a segunda funcionalidade, abra o insomnia e crie um HTTP Request com o verbo GET contendo "http://localhost:3000/pokemon/150" ou "http://localhost:3000/pokemon/mewtwo", após ".../pokemon/" preencha com o número identificador do pokemon desejado ou seu nome (certifique-se de que o nome está correto)

