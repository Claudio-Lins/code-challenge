Com base nos dados disponibilizados nos ficheiros pt.json, en.json e es.json,
desenvolve um pequeno protótipo utilizando NextJS e TailwindCSS.

- O protótipo deve ter:
  - Um menu principal com os itens parent (menu horizontal):
    - Exemplo EN: KNOW | PREPARE | PARTICIPATE | SUPPORT | BROADCAST
  - Um menu secundário (barra lateral) que abre apenas os itens do parent do menu principal clickado
    - Exemplo EN, KNOW: Organization | About WYD | News | Frequently Asked Questions (FAQ)
  - Uma select para alternar entre as 3 línguas

Adiciona os testes que julgares relevantes e submete o resultado para o repositório.


# LIKN VERCEL
https://affinity-code-challenge.vercel.app/


# Testes com Cypress
==================

Este repositório contém testes automatizados utilizando a ferramenta Cypress.

Descrição dos testes
--------------------

### Navbar

-   `should load the page`: Testa se a página inicial é carregada corretamente ao visitar a URL raiz.
-   `should switch the lang when is changed`: Testa se a mudança de idioma é refletida corretamente na página. O teste seleciona cada idioma disponível no menu e verifica se o valor do atributo `value` do elemento `select` muda de acordo com a seleção e se o texto correspondente ao idioma é exibido na página.
-   `should open and close sidebar menu`: Testa se o menu lateral é aberto e fechado corretamente. O teste clica no primeiro botão do menu lateral e verifica se o mesmo botão pode ser usado para fechar o menu.

### Home

-   `should load the page`: Testa se a página inicial é carregada corretamente ao visitar a URL raiz.
-   `should load the page in Portuguese`: Testa se o idioma padrão da página é o português. O teste verifica se o atributo `lang` do elemento `html` é definido como "pt-PT".
-   `should load the LANG in English`: Testa se a mudança de idioma para inglês é refletida corretamente na página. O teste seleciona o idioma inglês no menu e verifica se o valor do atributo `value` do elemento `select` muda para "english".
-   `should load the LANG in Portuguese`: Testa se a mudança de idioma para português é refletida corretamente na página. O teste seleciona o idioma português no menu e verifica se o valor do atributo `value` do elemento `select` muda para "portuguese".
-   `should load the LANG in Spanish`: Testa se a mudança de idioma para espanhol é refletida corretamente na página. O teste seleciona o idioma espanhol no menu e verifica se o valor do atributo `value` do elemento `select` muda para "spanish".

Como executar os testes
-----------------------

1.  Clone o repositório em sua máquina local.
2.  Abra o terminal na pasta raiz do projeto.
3.  Execute o comando `npm install` para instalar as dependências.
4.  Execute o comando `npm run cypress run` para executar os testes no navegador padrão do Cypress.

Requisitos
----------

-   Node.js versão 14 ou superior.
-   NPM versão 6 ou superior.