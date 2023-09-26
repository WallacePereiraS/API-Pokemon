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

![Captura de tela de 2023-09-26 16-00-46](https://github.com/WallacePereiraS/API-Pokemon/assets/136649619/293ff4af-98a1-4e15-9efd-967abdcea93a)

Para executar a segunda funcionalidade, abra o insomnia e crie um HTTP Request com o verbo GET contendo "http://localhost:3000/pokemon/150" ou "http://localhost:3000/pokemon/mewtwo", após ".../pokemon/" preencha com o Id do pokemon desejado ou seu nome (certifique-se de que o nome está correto)


> Pesquisando pelo nome
![Captura de tela de 2023-09-26 16-03-29](https://github.com/WallacePereiraS/API-Pokemon/assets/136649619/f77bd890-441f-411b-b71b-fd7ce4450e19)

> Pesquisando pelo Id
![Captura de tela de 2023-09-26 16-05-23](https://github.com/WallacePereiraS/API-Pokemon/assets/136649619/22b6a14a-c2c7-482f-841c-db51a5c61aa1)

