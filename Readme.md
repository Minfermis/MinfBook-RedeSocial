# MinfBook (Interface grafica da paginal principal de uma Rede Social)

<p align="center">
  <img src="img\readme\giff.gif" alt="Previa" width="400">
</p>


[MinfBook - Rede Social](https://minfermis.github.io/MinfBook-RedeSocial/)


## Visão Geral

Este projeto consiste em uma aplicação web para um sistema de mensagens, com recursos de personalização de tema e busca de mensagens. A aplicação foi desenvolvida utilizando HTML, CSS e JavaScript.

### Principais Recursos

- **Sidebar Interativa:** A barra lateral permite a navegação entre diferentes seções da aplicação, como mensagens e notificações. Os itens da barra lateral são destacados quando selecionados.

- **Personalização de Tema:** Os usuários podem personalizar o tema da aplicação, escolhendo entre diferentes opções de paleta de cores e tamanhos de fonte. As alterações são aplicadas em tempo real.

- **Busca de Mensagens:** Um campo de busca permite aos usuários filtrar as mensagens exibidas com base em palavras-chave.

### Tecnologias Utilizadas

- **HTML:** Utilizado para estruturar a página web e definir os elementos interativos, como menus e caixas de mensagem.

- **CSS:** Responsável pela estilização e aparência visual da aplicação, incluindo layout, cores e animações.

- **JavaScript:** Adiciona interatividade à aplicação, manipulando eventos do usuário, como cliques e entrada de texto, e atualizando dinamicamente o conteúdo da página.

### Detalhes de Implementação HTML e CSS

- **Barra Lateral:** Implementada utilizando elementos `<div>` e `<ul>`, estilizada com CSS para exibir ícones e labels para cada seção.

- **Personalização de Tema:** A caixa de diálogo de personalização de tema é criada com HTML e estilizada com CSS para exibir opções de paleta de cores e tamanhos de fonte.

- **Mensagens:** Cada mensagem é representada por um elemento `<div>` com classes específicas para estilização. A busca de mensagens é implementada utilizando JavaScript para filtrar as mensagens exibidas com base no texto inserido pelo usuário.

Este projeto serve como uma base para uma aplicação de mensagens web escalável e personalizável, com potencial para adição de mais funcionalidades no futuro.


## Mais Informações
1. **Menu Lateral:**
   - Os usuários podem navegar por diferentes seções da aplicação usando o menu lateral.
   - Os itens do menu ativos são destacados para indicar a seção atual.

2. **Busca de Mensagens:**
   - Os usuários podem buscar mensagens específicas usando a barra de busca.
   - As mensagens são filtradas dinamicamente com base na entrada do usuário.

3. **Personalização do Tema:**
   - Os usuários podem personalizar o tema da aplicação de acordo com suas preferências.
   - As opções incluem alterar tamanhos de fonte, selecionar paletas de cores e ajustar cores de fundo.

## Instalação
Para executar o ChatApp localmente, siga estas etapas:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-nome/chatapp.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd chatapp
   ```

3. Abra o arquivo `index.html` em seu navegador da web preferido.

## Stories
Design de Interface Atraente: Os stories são apresentados em uma barra horizontal na parte superior da tela, com uma aparência visual atraente que destaca o conteúdo multimídia compartilhado pelos usuários.

<div style="text-align: center;">
    <img src="img\readme\Stories.jpg" alt="Stories" style="width: 500px; height: auto; border-radius: 2%;">
</div>

## Temas de Cor de Fundo
O aplicativo conta com três temas de cor de fundo diferentes para atender às preferências dos usuários:

1. **Tema Noite:**  
O tema noturno oferece uma experiência visual suave e de baixo brilho, ideal para uso em ambientes com pouca iluminação. As cores de fundo escuras proporcionam conforto aos olhos e reduzem a fadiga visual durante o uso prolongado.

<div style="text-align: center;">
    <img src="img\readme\Noite.jpg" alt="Noite" style="width: 500px; height: auto; border-radius: 2%;">
</div>

2. **Tema Escuro:**  
O tema escuro apresenta uma paleta de cores profundas e contrastantes, criando uma atmosfera moderna e estilizada. Com tons escuros e elementos de destaque vibrantes, este tema é perfeito para usuários que preferem interfaces mais sofisticadas e elegantes.

<div style="text-align: center;">
    <img src="img\readme\Tema escuro.jpg" alt="Escuro" style="width: 500px; height: auto; border-radius: 2%;">
</div>

3. **Tema Claro:**  
O tema claro oferece uma experiência visual leve e arejada, com fundos claros e tons suaves. Ideal para ambientes bem iluminados, este tema proporciona uma sensação de frescor e simplicidade, facilitando a leitura e a interação com o aplicativo.  

<div style="text-align: center;">
    <img src="img\readme\Tema Claro.jpg" alt="Claro" style="width: 500px; height: auto; border-radius: 2%;">
</div>  


Os usuários podem selecionar o tema de cor de fundo que melhor se adapta às suas preferências e necessidades individuais, garantindo uma experiência de uso personalizada e confortável.

## Barra de menu 
A barra de menu é uma parte fundamental da interface do usuário em muitos aplicativos e sites. No projeto em questão, a barra de menu é responsável por fornecer navegação entre diferentes seções ou funcionalidades da aplicação. Aqui estão algumas características importantes da barra de menu:  

<img src="img\readme\Barra de menu.jpg" alt="Descrição da imagem" style="float: left; margin-right: 20px; width: 140px; height: auto; margin-bottom: 10px;" /> 


**Interatividade:** Os itens do menu são interativos, o que significa que os usuários podem clicar neles para acessar diferentes áreas da aplicação.

**Estado ativo:**** Geralmente, o item do menu correspondente à página ou seção atualmente visualizada recebe um destaque visual para indicar que está ativo. Isso ajuda os usuários a entenderem onde estão na aplicação.

**Notificações:** Às vezes, os itens do menu podem incluir notificações para alertar os usuários sobre novas mensagens, atualizações ou atividades relevantes.

**Pesquisa:** Alguns menus podem incluir uma opção de pesquisa para permitir que os usuários filtrem e encontrem rapidamente informações dentro da aplicação.

**Estilo e design:** O estilo e o design da barra de menu podem variar de acordo com o tema e o esquema de cores geral da aplicação. Uma barra de menu bem projetada geralmente se integra perfeitamente ao design geral da aplicação.

No projeto específico, a barra de menu parece ser interativa, com itens que podem ser clicados para acessar diferentes partes da aplicação. Também parece incluir um recurso de notificação e uma opção de pesquisa. O estilo e o design da barra de menu podem ser personalizados de acordo com as preferências de design e o tema geral da aplicação.



## Uso
Depois que o MinfBook estiver em execução, os usuários podem:

- Navegar por diferentes seções usando o menu lateral.
- Buscar mensagens específicas usando a barra de busca.
- Personalizar o tema, incluindo tamanhos de fonte, paletas de cores e cores de fundo.
- Explorar diferentes recursos e funcionalidades para aprimorar sua experiência de mensagens.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---

Esta versão simplificada fornece uma visão geral clara do projeto e instruções básicas para instalação e uso.
