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

## Sequence Diagram - Admin

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


