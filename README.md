# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Nome do Projeto: Herbotask

## Utilidades

Esse projeto usará json-server para simular uma API REST, para isso, é necessário instalar o json-server globalmente (apenas uma vez):
```bash
npm install -g json-server
```

Para rodar o servidor, basta executar o comando:
```bash
json-server --watch db.json
```

O arquivo db.json contém os dados que serão utilizados pelo json-server.

---

Esse projeto utiliza a biblioteca [MUI](https://mui.com/) para a criação de componentes e abstração do CSS boilerplate, além de adotar o padrão mobile first para o projeto.

---

## Visão Geral:
Herbotask é um projeto que combina sua paixão por herbologia, alquimia, pesquisa e natureza com a gamificação para aumentar a motivação e a produtividade em sua vida diária. Este sistema transforma tarefas cotidianas em missões e desafios que ganham recompensas no mundo virtual e real.

# Elementos-Chave:

    Sistema de Pontos:
        Cada tarefa é atribuída a um valor de pontos com base em sua importância e duração.
        Estude x horas, faça exercícios, realize tarefas domésticas, etc., para ganhar pontos.

    Recursos da Natureza:
        Utilize recursos como energia, água, terra, plantas, e outros elementos naturais em suas "missões".
        Os recursos são ganhos através do cumprimento de tarefas e podem ser usados para aprimorar seus projetos de herbologia e alquimia.

    Sistema de Crafting (Alquimia):
        Combine recursos naturais para criar poções, remédios, ou itens mágicos.
        Experimente diferentes combinações e descubra receitas secretas.

    Missões e Desafios:
        Defina metas e missões para você mesmo, relacionadas às suas paixões e à vida cotidiana.
        Cumpra missões para ganhar recompensas, como novas plantas para sua coleção ou novos elementos alquímicos.

    Sistema Idle:
        Implemente um sistema idle onde você pode ganhar recursos passivamente ao longo do tempo.
        Isso permite que você continue progredindo mesmo quando não está ativamente engajado nas tarefas.

    Herbário Virtual:
        Crie um herbário virtual para rastrear todas as suas plantas e descobertas.
        Ganhe pontos de pesquisa ao descobrir novas plantas ou experimentar com diferentes combinações.

    Comunidade e Competição:
        Convide amigos para participar do Herbotask e competir para ver quem atinge mais pontos ou alcança objetivos específicos.
        Crie um fórum ou grupo online para compartilhar suas descobertas e progresso.

    Recompensas no Mundo Real:
        Associe recompensas no mundo real aos pontos que você ganha no Herbotask, como comprar uma planta nova, adquirir um livro de herbologia, ou uma visita a um jardim botânico.

    Acompanhamento e Estatísticas:
        Mantenha um registro de seu progresso e use gráficos e estatísticas para acompanhar seu crescimento e evolução.

Implementação:
Desenvolva um aplicativo ou plataforma online que integre todos esses elementos. Você pode criar um site ou usar aplicativos de produtividade existentes como base e personalizá-los para se adequar à temática do Herbotask.

Dicas Adicionais:

    Defina metas claras para cada tarefa e missão.
    Mantenha um equilíbrio entre a diversão e a produtividade para evitar a sensação de sobrecarga.
    Mantenha-se flexível e ajuste o sistema conforme você aprende o que funciona melhor para você.
    Compartilhe seu progresso com amigos e familiares para criar um sistema de suporte.

Herbotask é uma forma inovadora de tornar suas paixões e tarefas diárias mais envolventes e recompensadoras. Ao transformar sua vida em um jogo, você pode encontrar a motivação necessária para realizar suas tarefas importantes enquanto se diverte explorando o mundo da herbologia e da alquimia.