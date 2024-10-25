
## 🚀 Integração com a API OpenAi
Integração com a API da OpenAi desenvolvido para fins pedagogicos



## 🛠 Tecnologias utilizadas
Eu utilizei Nest.js para o Backend e React para o frontend.

O projeto esta sendo executado de maneira local na porta 3000.


### 🛠 Coisas que aprendi com esse projeto

Esse projeto apesar de simples pode dar uma noção do tamanho que uma aplicação pode ficar, quando o backend começa e se tornar client de outros endpoints internos ou externos

No backend desenvolvi uma estrutura de modulos simples 
Onde o service da api (original) iria alimentar minha api, nele esta todas as informações de configuração como minha chave que esta em uma variavel de ambiente. 
E a função gerar mensagem que recebe um prompt, tudo isso é feito de forma automatizada na documentação da api, eu só inclui ali o prompt de forma dinamica e inclui um try catch.

No frontend eu recebi a api em um arquivo e exportei para poder acessar a função de requisição nos outros arquivos. 

Modularizei meus componentes e criei um context pois tinha que usar um estado em varios componentes.

Do mais é isso

## Foi divertido
