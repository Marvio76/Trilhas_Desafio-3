1. O que é o projeto?
Este projeto é uma iniciativa do Governo do Estado do Maranhão, em parceria com a SECTI (Secretaria de Estado da Ciência, Tecnologia e Inovação) e a FAPEMA (Fundação de Amparo à Pesquisa e ao Desenvolvimento do Maranhão), para aprimorar o sistema de inscrição do seu programa de formação em tecnologia.

O objetivo é criar um sistema de inscrição mais dinâmico, responsivo e interativo para os candidatos. Com isso, o sistema de cadastro será mais funcional e facilitará o processo de inscrição, além de proporcionar uma experiência de uso mais agradável.

A principal ideia é que, além de aprimorar o formulário de inscrição, os participantes implementem funcionalidades como:

Validação de campos: Para garantir que os dados sejam inseridos corretamente.

Armazenamento temporário de dados: Para facilitar o processo de inscrição sem perder as informações durante a navegação.

Interatividade com o usuário, proporcionando um formulário mais intuitivo e fácil de usar.

2. Como rodar localmente?
Para rodar o projeto localmente, basta seguir esses passos simples:

Clone o repositório do projeto: Se você não tem o código localmente, faça isso rodando o seguinte comando:

bash
Copiar
git clone https://github.com/seu-usuario/programa-trilhas.git
Acesse o diretório do projeto: Navegue até a pasta onde o projeto foi clonado:

bash
Copiar
cd programa-trilhas
Abra o arquivo index.html no seu navegador: Não precisa de servidor web para rodar esse projeto, você pode simplesmente abrir o arquivo HTML em qualquer navegador de sua preferência (Chrome, Firefox, Edge, etc.). Basta clicar duas vezes no arquivo ou arrastá-lo para o navegador.

Visualize e interaja com o formulário: Agora, você pode preencher os campos do formulário, testar a validação e verificar o envio de dados, como foi implementado no sistema de EmailJS.

3. Tecnologias Utilizadas
As tecnologias usadas neste projeto são:

HTML: Para estruturar o conteúdo e criar os formulários de inscrição.

CSS: Para estilizar e deixar o site visualmente atraente.

Bootstrap: Usado para criar um layout responsivo e bonito de forma rápida e prática, aproveitando os componentes prontos.

JavaScript: A base da lógica do sistema de inscrição, para implementar as funcionalidades de validação de campos, interatividade e até o envio de e-mail via EmailJS.

API (EmailJS): Utilizada para enviar e-mails automaticamente para o candidato após o preenchimento do formulário, confirmando o cadastro e enviando as informações preenchidas.

Essas tecnologias juntas criam uma experiência dinâmica, interativa e funcional para o usuário, sem precisar de uma infraestrutura complexa.

4. Principais Funcionalidades
As principais funcionalidades implementadas neste projeto são:

Formulário de Cadastro: O usuário preenche seu e-mail, ID de usuário e senha. Esses dados são validados antes de serem salvos.

Validação de Campos: Com o JavaScript, foi implementada a validação para garantir que todos os campos do formulário sejam preenchidos corretamente. Caso algum campo não seja preenchido, o sistema avisa o usuário com uma mensagem clara, ajudando a evitar erros de cadastro.

Armazenamento Temporário de Dados: Após a validação bem-sucedida, os dados são salvos no localStorage do navegador, o que permite que o usuário continue sua navegação sem perder as informações inseridas.

Envio de E-mail via EmailJS: Após o envio do formulário, é enviado um e-mail para o candidato usando o serviço EmailJS, agradecendo pela inscrição e confirmando os dados digitados (ID de usuário e senha). Isso proporciona um toque de profissionalismo e eficiência ao sistema.

Redirecionamento para a Página de Login: Após o sucesso no cadastro, o usuário é redirecionado automaticamente para a página de login, tornando o processo mais ágil.

