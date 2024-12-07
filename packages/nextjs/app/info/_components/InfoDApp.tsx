"use client";

import { UserGroupIcon, ShieldCheckIcon, ArrowPathIcon, ServerIcon, CubeTransparentIcon, WrenchScrewdriverIcon, AcademicCapIcon, CogIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline";

const InfoDApp = () => {
    return (
        <div className="documentation-container max-w-7xl mx-auto px-4 py-12 space-y-12">
            <section className="intro text-center">
                <h1 className="text-5xl font-bold text-dark">SMARTHIRE DOCUMENTATION</h1>
            </section>

            <section className="intro">
                <h2 className="text-3xl font-semibold text-dark flex items-center space-x-3"><UserGroupIcon className="h-6 w-6 text-dark mr-2" />INTRODUCTION</h2>
                <p className="text-lg text-dark mt-4">
                    SmartHire is a Governance dApp designed for DAOs (Decentralized Autonomous Organizations), primarily aimed at automating the process of digital hiring and task execution. This solution seeks to optimize and streamline operations in decentralized environments by using smart contracts developed in Solidity, integrating tools such as Scaffold-ETH-2 and the AccessControl.sol library from OpenZeppelin.
                </p>
            </section>

            <section className="objective bg-secondary py-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-dark">OBJECTIVE</h2>
                <p className="text-center text-lg text-dark mt-4">
                    Provide DAOs with an efficient, secure, and automated tool for managing digital hiring and assigned tasks, ensuring transparency, decentralization, and compliance through the implementation of roles and rewards in a blockchain environment.
                </p>
            </section>

            <section className="justification">
                <h2 className="text-3xl font-semibold text-dark flex items-center space-x-3"><CubeTransparentIcon className="h-6 w-6 text-dark mr-2" />JUSTIFICATION</h2>
                <p className="text-lg text-dark mt-4">
                    In the DAO ecosystem, efficient governance and automation are fundamental for success. SmartHire addresses the need for a system that facilitates task allocation, supervision, and rewards, eliminating barriers associated with traditional management methods while ensuring a secure and decentralized environment. The integration of tools such as OpenZeppelin allows for future extensibility and functional improvements with ease.
                </p>
            </section>

            <section className="scope bg-secondary py-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-dark">SCOPE</h2>
                <ul className="text-dark mt-4 space-y-4 ml-8">
                    <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-6 w-6 text-dark" /> <span>Providing a robust role structure with specific permissions: Administrators, Auditors, and Users.</span></li>
                    <li className="flex items-center space-x-3"><ArrowPathIcon className="h-6 w-6 text-dark" /> <span>Automating the assignment, execution, and verification of tasks within a DAO.</span></li>
                    <li className="flex items-center space-x-3"><CubeTransparentIcon className="h-6 w-6 text-dark" /> <span>Ensuring transparent rewards for users through blockchain transactions.</span></li>
                    <li className="flex items-center space-x-3"><ServerIcon className="h-6 w-6 text-dark" /> <span>Facilitating scalability and security through the OpenZeppelin library and Scaffold-ETH-2.</span></li>
                </ul>
            </section>

            <section className="functionality">
                <h2 className="text-3xl font-semibold text-center text-dark py-2">FUNCTIONALITY</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="feature-card text-center p-6 bg-secondary rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-dark">ADMINISTRATOR</h3>
                        <ul className="text-dark mt-2 space-y-4">
                            <li> Create Auditors.</li>
                            <li> Create Tasks and assign responsible parties.</li>
                            <li> Block or unblock Auditors.</li>
                        </ul>
                    </div>
                    <div className="feature-card text-center p-6 bg-secondary rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-dark">AUDITOR</h3>
                        <ul className="text-dark mt-2 space-y-4">
                            <li> Verify that Users complete the assigned tasks.</li>
                        </ul>
                    </div>
                    <div className="feature-card text-center p-6 bg-secondary rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-dark">USER</h3>
                        <ul className="text-dark mt-2 space-y-4">
                            <li> Accept tasks without assigned responsible parties.</li>
                            <li> Execute assigned tasks.</li>
                            <li> Await Auditor confirmation to receive the reward in their wallet.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="functional-requirements py-8 mb-8">
                <h2 className="text-3xl font-semibold text-center text-dark">FUNCTIONAL REQUIREMENTS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
                    <div className="req-card text-center p-6 bg-secondary rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-dark">INPUTS</h3>
                        <ul className="text-dark mt-2 space-y-4 ml-8">
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Role Registration: Administrator, Auditor, and User.</li>
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Task creation by the Administrator.</li>
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Assignment of responsible parties to tasks.</li>
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Submission of completed tasks by Users.</li>
                            <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Confirmation or rejection of tasks by Auditors.</li>
                        </ul>
                    </div>
                    <div className="req-card text-center p-6 bg-secondary rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-dark">PROCESSES</h3>
                        <ul className="text-dark mt-2 space-y-4 ml-8">
                            <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Role-based permission validation.</li>
                            <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Task and responsibility management.</li>
                            <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Task completion confirmation.</li>
                            <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Management of Auditor blocking and unblocking.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="non-functional-requirements bg-secondary py-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-dark">NON-FUNCTIONAL REQUIREMENTS</h2>
                <ul className="text-dark mt-4 space-y-4 ml-8">
                    <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Security: Protection against unauthorized access through defined roles and permissions.</li>
                    <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Scalability: Adaptation to a growing number of users and tasks without compromising performance.</li>
                    <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Performance: Efficient response in task assignment, validation, and rewards.</li>
                    <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Availability: Continuous operability ensured on the blockchain network.</li>
                    <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Extensibility: Easy addition of new functionalities and roles using OpenZeppelin.</li>
                    <li className="flex items-center space-x-3"><ShieldCheckIcon className="h-5 w-5 text-dark mr-2" /> Usability: User-friendly interface for interaction with roles within the dApp.</li>
                </ul>
            </section>

            <section className="technologies my-12">
                <h2 className="text-3xl font-semibold text-center text-dark">TECHNOLOGIES</h2>
                <ul className="text-dark mt-4 space-y-4">
                    <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Solidity: A programming language used for creating smart contracts, enabling secure automation of tasks and processes on the blockchain.</li>
                    <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Scaffold-ETH-2: An advanced framework that facilitates dApp development by integrating a complete setup for testing, deployment, and continuous development.</li>
                    <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> OpenZeppelin (AccessControl.sol): A library providing predefined tools for managing roles and permissions in smart contracts, enhancing security and reducing code complexity.</li>
                    <li className="flex items-center space-x-3"><WrenchScrewdriverIcon className="h-5 w-5 text-dark mr-2" /> Arbitrum Sepolia: A scalable blockchain network compatible with Ethereum, used to deploy SmartHire’s smart contracts, ensuring reduced transaction costs and high efficiency.</li>
                </ul>
            </section>
        </div>
    );
};

export default InfoDApp;
