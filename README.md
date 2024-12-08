# 🌐 SmartHire Documentation 

## Languages

- 📚 [English](./README.md)
- 📚 [Español](./README.es.md)
- 📚 [Português](./README.pt.md)


## 📊 Introduction

SmartHire is a Governance dApp designed for DAOs (Decentralized Autonomous Organizations), primarily aimed at automating the process of digital hiring and task execution. This solution seeks to optimize and streamline operations in decentralized environments by using smart contracts developed in Solidity, integrating tools such as Scaffold-ETH-2 and the AccessControl.sol library from OpenZeppelin.

## 🛠️ Objective

Provide DAOs with an efficient, secure, and automated tool for managing digital hiring and assigned tasks, ensuring transparency, decentralization, and compliance through the implementation of roles and rewards in a blockchain environment.

## 🔄 Justification

In the DAO ecosystem, efficient governance and automation are fundamental for success. SmartHire addresses the need for a system that facilitates task allocation, supervision, and rewards, eliminating barriers associated with traditional management methods while ensuring a secure and decentralized environment. The integration of tools such as OpenZeppelin allows for future extensibility and functional improvements with ease.

## 🔟 Scope

SmartHire focuses on:

- 🔒 Providing a robust role structure with specific permissions: Administrators, Auditors, and Users.

- ⚙️ Automating the assignment, execution, and verification of tasks within a DAO.

- 📡 Ensuring transparent rewards for users through blockchain transactions.

- 📊 Facilitating scalability and security through the OpenZeppelin library and Scaffold-ETH-2.

# 🔒 Roles

🔨 **Administrator**:

- ➕ Create Auditors.

- 📈 Create Tasks and assign responsible parties.

- ⛔️ Block or unblock Auditors in case of non-compliance with their duties.

🔍 **Auditor**:

- 🔎 Verify that Users complete the assigned tasks.

🛠️ **User**:

- ✍️ Accept tasks without assigned responsible parties.

- ⚙️ Execute assigned tasks.

- ⏳ Await Auditor confirmation to receive the reward in their wallet.

# 🔮 Functional Requirements

Inputs:

- ➕ Role registration: Administrator, Auditor, and User.

- 📈 Task creation by the Administrator.

- ✍️ Assignment of responsible parties to tasks.

- 📄 Submission of completed tasks by Users.

- ✅ Confirmation or rejection of tasks by Auditors.

Processes:

- ✔️ Role-based permission validation.

- ⚙️ Task and responsibility management.

- 📄 Task completion confirmation.

- 📡 Management of Auditor blocking and unblocking.

Outputs:

- 📄 Tasks available for Users.

- 💰 Rewards distributed to Users upon validation.

- 🔖 Reports on Auditor blocking/unblocking.

## ⚠️ Non-Functional Requirements

- ✅ **Security**: Protection against unauthorized access through defined roles and permissions.

- ✅ **Scalability**: Adaptation to a growing number of users and tasks without compromising performance.

- ✅ **Performance**: Efficient response in task assignment, validation, and rewards.

- ✅ **Availability**: Continuous operability ensured on the blockchain network.

- ✅ **Extensibility**: Easy addition of new functionalities and roles using OpenZeppelin.

- ✅ **Usability**: User-friendly interface for interaction with roles within the dApp.

## 🚀 Technologies

- 🔢 **Solidity**: A programming language used for creating smart contracts, enabling secure automation of tasks and processes on the blockchain.

- 🌐 **Scaffold-ETH-2**: An advanced framework that facilitates dApp development by integrating a complete setup for testing, deployment, and continuous development.

- 🔒 **OpenZeppelin (AccessControl.sol)**: A library providing predefined tools for managing roles and permissions in smart contracts, enhancing security and reducing code complexity.

- 📈 **Arbitrum Sepolia**: A scalable blockchain network compatible with Ethereum, used to deploy SmartHire’s smart contracts, ensuring reduced transaction costs and high efficiency.

## Business Model

![Model](https://i.ibb.co/g3zVKRZ/model.png)

## Sequence Diagram

<p align="center">
  <img src="https://i.ibb.co/N1dqRXs/sequence.png" alt="Sequence"/>
</p>

## Use Case

![Case](https://i.ibb.co/RQ7jVZY/case.png)

# Development Team

## Lead Developer

- 🧑🏻 Name: Carlos Henríquez

- 🔍 GitHub: NightmareFox12

- 💻 Role: Lead Developer

## Developer and Documentation

- 🧑🏻 Name: Miguel Rodríguez

- 🔍 GitHub: Echizen512

- 💻 Role: Developer and Documentation

## Developer

- 🧑🏻 Name: Miguel Mejías

- 🔍 GitHub: miguelmejias0512

- 💻 Role: Developer


# 🏗 Scaffold-ETH 2

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.18)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd SmartHire
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contracts in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.