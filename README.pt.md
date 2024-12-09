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

## Diagrama de Sequência - Admin

<p align="center">
  <img src="https://i.ibb.co/N1dqRXs/sequence.png" alt="Sequence"/>
</p>

## Caso de Uso

![Case](https://i.ibb.co/RQ7jVZY/case.png)


# Equipe de Desenvolvimento

## Desenvolvedor Principal

- 🧑🏻 **Nome:** Carlos Henríquez

- 🔍 **GitHub:** NightmareFox12

- 💻 **Função:** Desenvolvedor Principal

## Desenvolvedor e Documentação 

- 🧑🏻 **Nome:** Miguel Rodríguez

- 🔍 **GitHub:** Echizen512

- 💻 **Função:** Desenvolvedor e Documentação

## Desenvolvedor

🧑🏻 **Nome:** Miguel Mejías

🔍 **GitHub:** miguelmejias0512

💻 **Função:** Desenvolvedor

# Fluxo de Trabalho do Smart Contract para Gestão de Tarefas 🔑🚀

Este fluxo de trabalho descreve o processo de interação com o TaskContract e suas diversas funções, incluindo a gestão de usuários, criação de tarefas, atribuição de tarefas, conclusão de tarefas e verificação de tarefas. O contrato utiliza AccessControl para gerenciar roles e permissões.

## 1️⃣ Inicialização do Contrato 📜
- **Papel de Admin**: O contrato é implantado com um endereço de admin que tem controle total sobre o sistema. O admin recebe o DEFAULT_ADMIN_ROLE através do AccessControl da OpenZeppelin.

## 2️⃣ Gestão de Usuários 👥

**Adicionar Usuário 🆕**

- Quem: Admin ou Auditor

- Ação: O contrato permite que o admin ou auditor adicione um novo usuário.

**Passos**:
- Garantir que o endereço fornecido não seja o endereço zero.

- O usuário não pode ser o admin nem já ter um papel de auditor.

- O papel de usuário é concedido ao endereço fornecido.

- Um evento UserAdded é emitido.

**Obter Todos os Usuários 📑**

**Quem:** Admin ou Auditor

- Ação: Recupera todos os endereços dos usuários.

**Passos:**
- Garantir que o chamador tenha o ADMIN_ROLE ou AUDITOR_ROLE.

- Retorna a lista de todos os usuários.

**Obter Usuário por Endereço 🔍**

**Quem:** Qualquer pessoa

**Ação:** Verifica se um endereço é um usuário registrado.

**Passos:**
- Garantir que o endereço não seja o endereço zero.

- Retorna verdadeiro se o endereço for um usuário.

## 3️⃣ Criação de Tarefas 🛠️

**Criar Tarefa 📝**

**Quem:** Admin

**Ação:** O admin cria uma tarefa com uma recompensa.

**Passos:**
- Garantir que o nome da tarefa, descrição e regras não estejam vazios.

- O admin fornece uma recompensa (valor diferente de zero).

- A tarefa é adicionada ao sistema e um evento TaskAdded é emitido.

**Criar Tarefa com Pessoa Responsável 👤**

**Quem:** Admin

**Ação:** O admin cria uma tarefa e atribui um usuário responsável.

**Passos:**

- Garantir que o nome da tarefa, descrição e regras não estejam vazios.

- O usuário responsável não pode ser um admin nem um auditor.

- A tarefa é adicionada e o usuário recebe o papel de USER_ROLE, se ainda não o tiver.

- São emitidos os eventos TaskAdded e UserAdded.

**Obter Detalhes da Tarefa 📋**

**Quem:** Qualquer pessoa

**Ação:** Recupera o nome e a descrição da tarefa utilizando o ID da tarefa.

**Passos:** Retorna o nome e a descrição da tarefa.

## 4️⃣ Atribuição de Tarefas 📑

**Aceitar Tarefa ✅**

**Quem:** Usuário

**Ação:** Um usuário aceita uma tarefa não atribuída.

**Passos:**

- Garantir que o usuário não seja o admin nem um auditor.

- A tarefa deve estar sem ser atribuída.

- Se o usuário não estiver registrado, ele recebe o papel de USER_ROLE.

- O usuário é marcado como responsável pela tarefa.

## 5️⃣ Conclusão de Tarefas 🏁

**Completar Tarefa 🏆**

**Quem:** Usuário

**Ação:** O usuário envia prova de que completou a tarefa.

**Passos:**

- Garantir que a tarefa exista e não tenha sido completada.

- Deve ser fornecida uma prova de conclusão.

- Um registro TaskCompleted é criado com a prova.

- A tarefa é marcada como "não verificada" e "não liberada".

## 6️⃣ Verificação de Tarefas ✅

**Verificar Tarefa 🔍**

**Quem:** Admin ou Auditor

**Ação:** O admin ou auditor verifica a conclusão da tarefa.

**Passos:**

- Garantir que o chamador tenha o ADMIN_ROLE ou AUDITOR_ROLE.

- Verificar se a tarefa existe e se a prova foi fornecida.

- Se a tarefa for verificada, o auditor ou admin se torna o verificador e aprova a tarefa.

- A recompensa é transferida para o usuário responsável.

## 7️⃣ Liberação de Tarefas 💸

**Liberar Recompensa 💰**

**Quem:** Admin ou Auditor

**Ação:** Libera a recompensa para o usuário responsável após a verificação da tarefa.

**Passos:**
- A tarefa deve estar verificada.

- Se verificada, a recompensa é transferida para o endereço responsável.

- Um evento TaskCompleted é emitido para confirmar a liberação da tarefa.

## 8️⃣ Gestão de Auditores 🕵️‍♂️

**Adicionar Auditor 🔑**

**Quem:** Admin

**Ação:** O admin pode atribuir um papel de auditor.

**Passos:**

- O admin concede o papel de AUDITOR_ROLE para um novo endereço.
- Um evento AuditorAdded é emitido.

**Obter Lista de Auditores 📋**

**Quem:** Admin ou Auditor

**Ação:** Recupera a lista de todos os auditores.

**Passos:**

- Retorna a lista de endereços dos auditores.

## 9️⃣ Funcionalidades Adicionais ⚙️

**Obter Tarefas por Responsável 👤**

**Quem:** Usuário

**Ação:** Recupera todas as tarefas atribuídas ao chamador.

**Passos:**

- O chamador deve ter o papel USER_ROLE.

- Retorna as tarefas atribuídas ao usuário.

**Obter Tarefas Sem Responsável ❌**

**Quem:** Qualquer pessoa

**Ação:** Recupera as tarefas que não têm um responsável atribuído.

**Passos:**

- Retorna tarefas sem um endereço responsável.

**Obter Tarefa Concluída 🏅**

**Quem:** Admin ou Auditor

**Ação:** Recupera uma tarefa concluída pelo ID.

**Passos:**

- Retorna a tarefa concluída com base no ID da tarefa.

## 1️⃣0️⃣ Manipulação de Eventos 📣

- **AuditorAdded:** Emitido quando um novo auditor é adicionado.

- **TaskAdded:** Emitido quando uma nova tarefa é criada.

- **UserAdded:** Emitido quando um novo usuário é adicionado.


# 🌐 Usando AccessControl em Solidity Smart Contracts 🔒

Neste arquivo, explicamos como a funcionalidade `AccessControl` funciona em um **Smart Contract** em Solidity, uma ferramenta que permite gerenciar funções e permissões de acesso para que funções específicas no seu contrato só possam ser executadas por usuários autorizados. Vamos começar! 🚀

## 🔑 O que é o AccessControl? 🛡️

`AccessControl` é uma biblioteca da **OpenZeppelin** usada para implementar um sistema de controle de acesso em um smart contract. Esse sistema gerencia quem pode executar quais funções dentro do contrato através de **funções**. Os roles são representados como identificadores únicos que determinam as permissões do usuário. 🎫

### 📝 Roles Comuns

1. **Administrador (`DEFAULT_ADMIN_ROLE`)**: 🔑 Essa role tem **todas** as permissões no contrato e pode atribuir ou revogar roles para outros usuários. Uma role muito poderosa! ⚡
2. **Auditores (`AUDITOR_ROLE`)**: 👩‍⚖️👨‍⚖️ Essa role é usada para permitir que certos usuários validem ações, como verificar se uma tarefa foi concluída.
3. **Usuários (`USER_ROLE`)**: 👤 Esses usuários podem aceitar tarefas, completá-las e participar do sistema.

## ⚙️ Como Funciona? 🔍

O **smart contract** neste exemplo usa `AccessControl` para gerenciar eficientemente as roles e permissões.

### 1. **Definindo Roles** 📋

Em nosso contrato, definimos roles como constantes `bytes32` da seguinte forma:

```solidity
bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");
bytes32 public constant USER_ROLE = keccak256("USER_ROLE");
```

Cada role é representada por um identificador único, gerado usando a função keccak256.

### 2. Atribuindo Roles 👥

As roles normalmente são atribuídas aos endereços dos usuários quando o contrato é implantado. Por exemplo, um administrador (que tem todas as permissões) é atribuído durante a criação do contrato:

```solidity
constructor(address _admin) {
    admin = _admin;
    _grantRole(DEFAULT_ADMIN_ROLE, _admin); // Admin gets all permissions
}
```

### 3. Controle de Acesso em Funções 🔐
As funções no contrato só podem ser executadas por usuários com roles específicas. Isso é gerenciado usando a função hasRole(), que verifica se o endereço que chama tem a role correta. 🧐

**Exemplo 1: Criar uma Tarefa 🎯**
Somente administradores podem criar novas tarefas. Se um usuário sem a role adequada tentar fazer isso, a transação falhará:

```solidity
function createTask(string memory _name, string memory _description, string memory _rules)
    public
    payable
    onlyRole(DEFAULT_ADMIN_ROLE) // Only administrators
{
    // Task creation logic
}
```

**Exemplo 2: Verificar Conclusão de Tarefa ✅**

Para verificar se uma tarefa foi completada corretamente, somente administradores ou auditores podem executar a função:

```solidity
function verifyTaskCompletion(uint taskId) public {
    require(
        hasRole(DEFAULT_ADMIN_ROLE, msg.sender) ||
        hasRole(AUDITOR_ROLE, msg.sender), // Requires admin or auditor role
        "You do not have permission to verify this task"
    );
    // Verification logic
}
```

### Revogando Roles 🔄

As roles também podem ser revogadas! Se um usuário não precisar mais de uma role, um administrador pode removê-la facilmente:

```solidity
_revokeRole(USER_ROLE, userAddress); // Revoke user role
```

Isso garante que as permissões sejam gerenciadas de forma adequada à medida que as necessidades do sistema evoluem. 🔄

## 🎯 Benefícios de Usar o AccessControl 🛠️

- **Segurança 🔒:** Garante que somente usuários com as permissões apropriadas possam executar certas ações no contrato.
Flexibilidade ⚙️: Permite adicionar ou remover roles facilmente conforme o sistema evolui.

- **Auditoria 🔍:** Permite que auditores revisem ações sem comprometer a segurança do contrato.

## 🛑 Conclusão 🚀
É isso! Usar AccessControl em Solidity dá a você total controle sobre quem pode fazer o quê dentro do seu smart contract. Essa ferramenta melhora a segurança 🔒, a flexibilidade ⚙️, e garante que somente usuários autorizados 👤 interajam com funções sensíveis. Não se esqueça de que gerenciar permissões é a chave para contratos mais seguros e eficientes! 🎯



