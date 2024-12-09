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

- 🧑🏻 **Name**: Carlos Henríquez

- 🔍 **GitHub**: NightmareFox12

- 💻 **Role**: Lead Developer

## Developer and Documentation

- 🧑🏻 **Name**: Miguel Rodríguez

- 🔍 **GitHub**: Echizen512

- 💻 **Role**: Developer and Documentation

## Developer

- 🧑🏻 **Name**: Miguel Mejías

- 🔍 **GitHub**: miguelmejias0512

- 💻 **Role**: Developer

# Smart Contract Workflow for Task Management 🔑🚀

This workflow outlines the process of interacting with the TaskContract and its various functions, including user management, task creation, task assignment, task completion, and task verification. The contract utilizes AccessControl for managing roles and permissions.

## 1️⃣ Contract Initialization 📜
- **Admin Role**: The contract is deployed with an admin address that has full control over the system. The admin is granted the DEFAULT_ADMIN_ROLE via OpenZeppelin's AccessControl.

## 2️⃣ User Management 👥

**Add User 🆕**

- Who: Admin or Auditor

- Action: The contract allows the admin or auditor to add a new user.

**Steps**:
- Ensure the provided address is not the zero address.

- The user cannot be the admin or already have an auditor role.

- The user role is granted to the provided address.

- A UserAdded event is emitted.
- Get All Users 📑

**Who:** Admin or Auditor

- Action: Retrieves all user addresses.

**Steps:**
- Ensure the caller has ADMIN_ROLE or AUDITOR_ROLE.

- Return the list of all users.

- Get User by Address 🔍

**Who:** Anyone

**Action:** Checks if an address is a registered user.

**Steps:**
- Ensure the address is not the zero address.

- Returns true if the address is a user.

## 3️⃣ Task Creation 🛠️

**Create Task 📝**

**Who:** Admin

**Action:** Admin creates a task with a reward.

**Steps:**
- Ensure the task name, description, and rules are non-empty.

- The admin provides a reward (non-zero value).

- The task is added to the system, and a TaskAdded event is emitted.

- Create Task with Responsible Person 👤

**Who:** Admin

**Action:** Admin creates a task and assigns a responsible user.

**Steps:**

- Ensure the task name, description, and rules are non-empty.

- The responsible user cannot be an admin or auditor.

- The task is added, and the user is granted the USER_ROLE if not already assigned.

- A TaskAdded and UserAdded event are emitted.

- Get Task Details 📋

**Who:** Anyone

**Action:** Fetches the task name and description using the task ID.

**Steps:** Return the name and description of the task.

## 4️⃣ Task Assignment 📑

**Accept Task ✅**

**Who:** User

**Action:** A user accepts an unassigned task.

**Steps:**

- Ensure the user is not the admin or auditor.

- The task must be unassigned.

- If the user is not registered, they are granted the USER_ROLE.

- The user is marked as the responsible party for the task.

## 5️⃣ Task Completion 🏁

**Complete Task 🏆**

**Who:** User

**Action:** User submits proof for completing the task.

**Steps:**

- Ensure the task exists and is not already completed.

- Proof of completion must be provided.

- A TaskCompleted record is created with proof.

- The task is flagged as "not verified" and "not released".

## 6️⃣ Task Verification ✅

**Verify Task 🔍**

**Who:** Admin or Auditor

**Action:** Admin or auditor verifies the task completion.

**Steps:**

- Ensure the caller has the ADMIN_ROLE or AUDITOR_ROLE.

- Verify that the task exists and that proof is provided.

- If the task is verified, the auditor or admin becomes the verifier and approves the task.

- The reward is transferred to the responsible user.

## 7️⃣ Task Release 💸

**Release Reward 💰**

**Who:** Admin or Auditor

**Action:** Releases the reward to the responsible user upon task verification.

**Steps:**
- The task must be verified.

- If verified, the reward is transferred to the responsible address.

- A TaskCompleted event is emitted to confirm the task's release.

## 8️⃣ Auditor Management 🕵️‍♂️

**Add Auditor 🔑**

**Who:** Admin

**Action:** Admin can assign an auditor role.

**Steps:**

- Admin grants the AUDITOR_ROLE to a new address.
- An AuditorAdded event is emitted.

**Get Auditor List 📋**

**Who:** Admin or Auditor

**Action:** Retrieves the list of all auditors.

**Steps:**

- Returns the list of auditor addresses.

## 9️⃣ Additional Features ⚙️

**Get Tasks by Responsible 👤**

**Who:** User

**Action:** Retrieves all tasks assigned to the caller.

**Steps:**

- The caller must have the USER_ROLE.

- Return tasks assigned to the user.

- Get Tasks Without Responsible ❌

**Who:** Anyone

**Action:** Retrieves tasks that have no responsible party assigned.

**Steps:**

- Returns tasks without a responsible address.

- Get Completed Task 🏅

**Who:** Admin or Auditor

**Action:** Retrieves a completed task by ID.

**Steps:**

- Returns the completed task based on the task ID.

## 1️⃣0️⃣ Event Handling 📣

- **AuditorAdded:** Emitted when a new auditor is added.

- **TaskAdded:** Emitted when a new task is created.

- **UserAdded:** Emitted when a new user is added.


# 🌐 Using `AccessControl` in Solidity Smart Contracts 🔒

In this file, we explain how the `AccessControl` feature works in a **Smart Contract** in Solidity, a tool that allows you to manage roles and access permissions so that specific functions in your contract can only be executed by authorized users. Let’s dive in! 🚀

## 🔑 What is `AccessControl`? 🛡️

`AccessControl` is an **OpenZeppelin** library used to implement an access control system in a smart contract. This system manages who can execute which functions within the contract through **roles**. Roles are represented as unique identifiers that determine user permissions. 🎫

### 📝 Common Roles

1. **Administrator (`DEFAULT_ADMIN_ROLE`)**: 🔑 This role has **all** permissions in the contract, and can assign or revoke roles for other users. A very powerful role! ⚡
2. **Auditors (`AUDITOR_ROLE`)**: 👩‍⚖️👨‍⚖️ This role is used to allow certain users to validate actions, like checking if a task has been completed.
3. **Users (`USER_ROLE`)**: 👤 These users can accept tasks, complete them, and participate in the system.

## ⚙️ How Does It Work? 🔍

The **smart contract** in this example uses `AccessControl` to efficiently manage roles and permissions.

### 1. **Defining Roles** 📋

In our contract, we define roles as `bytes32` constants like this:

```solidity
bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");
bytes32 public constant USER_ROLE = keccak256("USER_ROLE");
```

Each role is represented by a unique identifier, generated using the keccak256 function.

### 2. Assigning Roles 👥

Roles are typically assigned to user addresses when the contract is deployed. For example, an administrator (who has all permissions) is assigned during contract creation:

```solidity
constructor(address _admin) {
    admin = _admin;
    _grantRole(DEFAULT_ADMIN_ROLE, _admin); // Admin gets all permissions
}
```

### 3. Access Control in Functions 🔐
Functions in the contract can only be executed by users with specific roles. This is managed using the hasRole() function, which checks if the calling address has the correct role. 🧐

**Example 1: Create a Task 🎯**
Only administrators can create new tasks. If a user without the proper role tries to do it, the transaction will fail:

```solidity
function createTask(string memory _name, string memory _description, string memory _rules)
    public
    payable
    onlyRole(DEFAULT_ADMIN_ROLE) // Only administrators
{
    // Task creation logic
}
```
**Example 2: Verify Task Completion ✅**

To verify if a task has been completed correctly, only administrators or auditors can execute the function:

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

### Revoking Roles 🔄

Roles can also be revoked! If a user no longer needs a role, an administrator can easily remove it:

```solidity
_revokeRole(USER_ROLE, userAddress); // Revoke user role
```

This ensures that permissions are managed appropriately as the needs of the system evolve. 🔄

## 🎯 Benefits of Using AccessControl 🛠️

- **Security 🔒:** Ensures that only users with the appropriate permissions can execute certain actions in the contract.
- **Flexibility ⚙️**: Easily add or remove roles as the system evolves.

- **Auditing 🔍:** Allows auditors to review actions without compromising the contract’s security.

## 🛑 Conclusion 🚀

That’s it! Using AccessControl in Solidity gives you full control over who can do what within your smart contract. This tool enhances security 🔒, flexibility ⚙️, and ensures that only authorized users 👤 interact with sensitive functions. Don’t forget, managing permissions is key to more secure and efficient contracts! 🎯


