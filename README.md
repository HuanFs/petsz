# petsz
 função de manipulação do DOM contendo um contador que incrementa e remove cachorrinhos da tela

# variáveis declaradas
* wid: - armazena a largura da janela do navegador para aplicar um visual diferente de acordo com o tamanho do navegador

* buttons: - 
* closeBTN: - é o botão responsável por fechar a caixa de ajuda que é aberta automaticamente após a mensagem de apresentação da aplicação ou quando o botão de ajuda é clicado. executando a função **Close()**
* cont: - varíavel que acompanha os contadores de incremento e decremento das funções **remv()** e **add()**
* openClose: - varíavel responsável por armazenar um valor que pode ser 0 ou 1 e que controla se os botões da aplicação serão exibidos ou ocultados da tela através da função **showHide()** 
* img: - essa variável armazena a imagem que será mudada dinamicamente através da alteração de seu atributo src pelas funções **remv()** ou **add()**

# funcionamento
* função Welcome(): - é executada quando a aplicação é aberta ou recarregada, ela contém algumas funções "setTimeout()" que respectivamente: - torna um título H1 dentro da tag Header, que de inicio encontra-se invisível pela propriedade "opacity:0" em visível, aplicando um "opacity:1", depois excluir a tag Header através da função nativa do javascript "remove()"

* função Ajuda(): - cria uma div contendo um texto descritivo sobre como funciona a aplicação e também um botão que fecha esta div. TODOS OS ELEMENTOS SÃO CRIADOS ATRAVÉS DO JAVASCRIPT E REMOVIDOS, ATRAVÉS DO BOTÃO "Close".

* showHide(): - essa função controla a exibição dos botões da aplicação observando o valor da variável "openClose()" que pode ser 0 ou 1

* função Close(): - é a função responsável por excluir da tela e do DOM a caixa de ajuda com informações sobre o funcionamento da aplicação, criada anteriormente pela função "ajuda()"

* função Add(): - observa uma variável chamada de CONT, que serve de contador onde cada clique soma mais um, de acordo com o número deste contador, muda o atributo "src" da imagem de fundo para que ela exiba mais cachorros na tela de acordo com o número de cliques no botão, até um máximo de 7, onde é exibido um "alert" informando que o número máximo de adição dos cachorros foi atingido

* função Remv(): - oberseva uma variável chamada de CONT, que serve de contador, onde cada clique subtrai um e, de acordo com o número deste contador, muda o atributo "src" da imagem de fundo para que ela exiba menos cachorros na tela de acordo com o número de cliques no botão, até um minímo de 0, onde é exibido um "alert" informando que o número minimo de cachorros na tela foi alcançado
