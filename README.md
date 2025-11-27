# Fitness Routine

Um sistema web para criação e gerenciamento de planilhas de exercícios, projetado para auxiliar usuários de todos os níveis a organizar e otimizar suas rotinas de treino de forma inteligente e personalizada.

## 📝 Sobre o Projeto

Fitness Routine é uma aplicação que visa facilitar a vida de quem busca uma rotina de treinos mais estruturada e eficiente. A plataforma permite que os usuários criem, visualizem e acompanhem suas planilhas de exercícios, utilizando o poder da Inteligência Artificial (Google Gemini) para gerar treinos personalizados.

O projeto foi desenvolvido para atender desde o iniciante no mundo fitness até o praticante mais avançado, ajudando na organização do tempo e no aperfeiçoamento contínuo dos treinos.

## ✨ Funcionalidades

- **Criação de Planilhas com IA:** Geração de tabelas de exercícios personalizadas e separadas por dias da semana com o auxílio da IA do Google (Gemini).
- **Autenticação de Usuários:** Sistema completo de cadastro, login e logout para gerenciamento de perfis.
- **Gerenciamento de Dados:** Os usuários podem alterar suas informações de perfil e dados pessoais.
- **Download de Treinos:** Opção para baixar a planilha de treino em formato PDF para acesso offline.
- **Página de Curiosidades:** Uma seção dedicada a informações e curiosidades sobre o mundo fitness, apresentada em um formato de carrossel interativo.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

**Frontend:**
- HTML5
- CSS3
- JavaScript

**Backend:**
- Python
- Django
- Django REST Framework
- Pillow (para manipulação de imagens)
- Simple JWT (para autenticação via token)
- Django CORS Headers (para controle de acesso de diferentes origens)

## ⚙️ Como Executar o Projeto

Como o projeto ainda não foi lançado em um servidor de produção, ele pode ser executado em um ambiente local. Siga os passos abaixo:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Python 3.x](https://www.python.org/downloads/)
- [Pip](https://pip.pypa.io/en/stable/installation/) (gerenciador de pacotes do Python)

### Clonando o Repositório
Configurando o Backend:
- Navegue até a pasta do backend
cd BACKEND/FitnessRoutine

- Crie um ambiente virtual para isolar as dependências do projeto:
python -m venv venv

- Ative o ambiente virtual:
No Windows:
venv\Scripts\activate

No macOS e Linux:
source venv/bin/activate

- Instale as dependências do backend listadas no arquivo requirements.txt:
pip install -r ../requirements.txt

- Aplique as migrações do banco de dados:
python manage.py migrate

- Inicie o servidor do backend:
python manage.py runserver

- O servidor Django estará rodando em http://127.0.0.1:8000/.
  
## Configurando o Frontend
Abra um novo terminal.
- O frontend é composto por arquivos HTML, CSS e JS estáticos. Para visualizá-lo, você pode usar um servidor local. Se você tiver o Python instalado, pode usar o módulo http.server. Navegue até a pasta do frontend e inicie o servidor:
cd FRONTEND
python -m http.server

- Acesse http://localhost:8000 (ou a porta que for indicada no seu terminal) no seu navegador para interagir com a aplicação.
  
git clone https://github.com/thurxx15/fitness_routine.git
cd fitness_routine
