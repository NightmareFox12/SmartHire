# 🌐 Documentação SmartHire

## Idiomas

- 📚 [English](./README.md)
- 📚 [Español](./README.es.md)
- 📚 [Português](./README.pt.md)

## 📊 Introdução

SmartHire é uma dApp de Governança projetada para DAOs (Organizações Autônomas Descentralizadas), com o objetivo principal de automatizar o processo de contratação digital e a realização de tarefas. Esta solução busca otimizar e agilizar as operações em ambientes descentralizados utilizando contratos inteligentes desenvolvidos em Solidity, integrando ferramentas como Scaffold-ETH-2 e a biblioteca AccessControl.sol do OpenZeppelin.

## 🛠️ Objetivo

Fornecer às DAOs uma ferramenta eficiente, segura e automatizada para gerenciar a contratação digital e a realização de tarefas atribuídas, garantindo transparência, descentralização e conformidade por meio da implementação de funções e recompensas em um ambiente blockchain.

## 🔄 Justificação

No ecossistema das DAOs, a governança eficiente e a automação são fundamentais para o sucesso. O SmartHire atende à necessidade de um sistema que facilite a distribuição de tarefas, supervisão e recompensas, eliminando barreiras associadas aos métodos tradicionais de gestão e garantindo um ambiente seguro e descentralizado. A integração de ferramentas como o OpenZeppelin permite a extensão e melhoria futura da funcionalidade do sistema com facilidade.

## 🔟 Escopo

O SmartHire foca em:

- 🔒 Fornecer uma estrutura robusta de funções com permissões específicas: Administradores, Auditores e Usuários.

- ⚙️ Automatizar a distribuição, execução e verificação de tarefas dentro de uma DAO.

- 📡 Garantir recompensas transparentes para os usuários através de transações blockchain.

- 📊 Facilitar a escalabilidade e segurança por meio da biblioteca OpenZeppelin e do Scaffold-ETH-2.

# 🔒 Funções

🔨 **Administrador**:

- ➕ Criar Auditores.

- 📈 Criar tarefas e atribuir responsáveis.

- ⛔️ Bloquear ou desbloquear Auditores em caso de não conformidade com suas funções.

🔍 **Auditor**:

- 🔎 Verificar se os Usuários concluíram as tarefas atribuídas.

🛠️ **Usuário**:

- ✍️ Aceitar tarefas sem responsáveis atribuídos.

- ⚙️ Executar as tarefas atribuídas.

- ⏳ Aguardar a confirmação do Auditor para receber a recompensa em sua wallet.

# 🔮 Requisitos Funcionais

Entradas:

- ➕ Registro de funções: Administrador, Auditor e Usuário.

- 📈 Criação de tarefas pelo Administrador.

- ✍️ Atribuição de responsáveis às tarefas.

- 📄 Envio de tarefas concluídas pelos Usuários.

- ✅ Confirmação ou rejeição de tarefas pelos Auditores.

Processos:

- ✔️ Validação de permissões com base nas funções.

- ⚙️ Gestão de tarefas e responsáveis.

- 📄 Confirmação da conclusão de tarefas.

- 📡 Gerenciamento de bloqueios e desbloqueios de Auditores.

Saídas:

- 📄 Tarefas disponíveis para os Usuários.

- 💰 Recompensas distribuídas aos Usuários após a validação.

## ⚠️ Requisitos Não Funcionais

- ✅ **Segurança**: Proteção contra acessos não autorizados por meio de funções e permissões definidas.

- ✅ **Escalabilidade**: Adaptação a um maior número de usuários e tarefas sem comprometer o desempenho.

- ✅ **Desempenho**: Resposta eficiente na distribuição, validação e recompensa de tarefas.

- ✅ **Disponibilidade**: Operação contínua garantida na rede blockchain.

- ✅ **Extensibilidade**: Possibilidade de adicionar novas funcionalidades e funções facilmente utilizando o OpenZeppelin.

- ✅ **Usabilidade**: Interface amigável para a interação das funções dentro da dApp.

## 🚀 Tecnologias

- 🔢 **Solidity**: Linguagem de programação utilizada para a criação de contratos inteligentes, permitindo a automação segura de tarefas e processos na blockchain.

- 🌐 **Scaffold-ETH-2**: Framework avançado que facilita o desenvolvimento de dApps integrando uma configuração completa para testes, implantação e desenvolvimento contínuo.

- 🔒 **OpenZeppelin (AccessControl.sol)**: Biblioteca que fornece ferramentas predefinidas para a gestão de funções e permissões em contratos inteligentes, aumentando a segurança e reduzindo a complexidade do código.

- 📈 **Arbitrum Sepolia**: Rede blockchain escalável e compatível com Ethereum, utilizada para implantar os contratos inteligentes do SmartHire, garantindo custos reduzidos de transação e alta eficiência.

## Modelo de Negócios

![Model](https://i.ibb.co/g3zVKRZ/model.png)

## Diagrama de Sequência

<p align="center">
  <img src="https://i.ibb.co/N1dqRXs/sequence.png" alt="Sequence"/>
</p>

## Caso de Uso

![Case](https://i.ibb.co/RQ7jVZY/case.png)


# Equipe de Desenvolvimento

## Desenvolvedor Principal

- 🧑🏻 Nome: Carlos Henríquez

- 🔍 GitHub: NightmareFox12

- 💻 Função: Desenvolvedor Principal

## Desenvolvedor e Documentação 

- 🧑🏻 Nome: Miguel Rodríguez

- 🔍 GitHub: Echizen512

- 💻 Função: Desenvolvedor e Documentação

## Desenvolvedor

🧑🏻 Nome: Miguel Mejías

🔍 GitHub: miguelmejias0512

💻 Função: Desenvolvedor