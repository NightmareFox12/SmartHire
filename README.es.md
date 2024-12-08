# 🌐 Documentación SmartHire

## Idiomas

- 📚 [English](./README.md)
- 📚 [Español](./README.es.md)
- 📚 [Português](./README.pt.md)

## 📊 Introducción

SmartHire es una dApp de Gobernanza diseñada para DAO (Organizaciones Autónomas Descentralizadas), cuyo propósito principal es automatizar el proceso de contratación digital y la realización de tareas. Esta solución busca optimizar y agilizar las operaciones en entornos descentralizados mediante el uso de contratos inteligentes desarrollados en Solidity, integrando herramientas como Scaffold-ETH-2 y la biblioteca AccessControl.sol de OpenZeppelin.

## 🛠️ Objetivo

Proveer a las DAO de una herramienta eficiente, segura y automatizada para gestionar la contratación digital y la realización de tareas asignadas, garantizando transparencia, descentralización y cumplimiento mediante la implementación de roles y recompensas en un entorno blockchain.

## 🔄 Justificación

En el ecosistema de las DAO, la gobernanza eficiente y la automatización son fundamentales para el éxito. SmartHire aborda la necesidad de un sistema que facilite la asignación de tareas, la supervisión y la recompensa, eliminando las barreras asociadas con los métodos tradicionales de gestión y garantizando un entorno seguro y descentralizado. La integración de herramientas como OpenZeppelin permite extender y mejorar la funcionalidad del sistema a futuro de forma ágil.

## 🔟 Alcance

SmartHire se enfoca en:

- 🔒 Proveer una estructura robusta de roles con permisos específicos: Administradores, Auditores y Usuarios.

- ⚙️ Automatizar la asignación, ejecución y verificación de tareas dentro de una DAO.

- 📡 Garantizar la recompensa transparente a los usuarios mediante transacciones blockchain.

- 📊 Facilitar la escalabilidad y seguridad a través de la biblioteca OpenZeppelin y Scaffold-ETH-2.

# 🔒 Roles

🔨 **Administrador**:

- ➕ Crear Auditores.

- 📈 Crear tareas y asignar responsables.

- ⛔ Bloquear o desbloquear Auditores en caso de incumplimiento de sus funciones.

🔍 **Auditor**:

- 🔎 Verificar que los Usuarios completen las tareas asignadas.

🛠️ **Usuario**:

- ✍️ Aceptar tareas sin responsables.

- ⚙️ Realizar tareas asignadas.

- ⏳ Esperar la confirmación del Auditor para recibir la recompensa en su wallet.

# 🔮 Requisitos Funcionales

Entradas:

- ➕ Registro de roles: Administrador, Auditor y Usuario.

- 📈 Creación de tareas por el Administrador.

- ✍️ Asignación de responsables a tareas.

- 📄 Envío de tareas completadas por los Usuarios.

- ✅ Confirmación o rechazo de tareas por los Auditores.

Procesos:

- ✔️ Validación de permisos según roles.

- ⚙️ Gestión de tareas y responsables.

- 📄 Confirmación de cumplimiento de tareas.

- 📡 Manejo de bloqueos y desbloqueos de Auditores.

Salidas:

- 📄 Tareas disponibles para los Usuarios.

- 💰 Recompensas distribuidas a Usuarios tras la validación.

## ⚠️ Requisitos No Funcionales

- ✅ **Seguridad**: Protección contra accesos no autorizados mediante roles y permisos definidos.

- ✅ **Escalabilidad**: Adaptación a un mayor número de usuarios y tareas sin comprometer el rendimiento.

- ✅ **Rendimiento**: Respuesta eficiente en la asignación, validación y recompensa de tareas.

- ✅ **Disponibilidad**: Operatividad continua garantizada en la red blockchain.

- ✅ **Extensibilidad**: Posibilidad de añadir nuevas funcionalidades y roles de manera sencilla mediante OpenZeppelin.

- ✅ **Usabilidad**: Interfaz amigable para la interacción de los roles dentro de la dApp.

## 🚀 Tecnologías

- 🔢 **Solidity**: Lenguaje de programación utilizado para la creación de contratos inteligentes, permitiendo la automatización segura de tareas y procesos en blockchain.

- 🌐 **Scaffold-ETH-2**: Framework avanzado que facilita el desarrollo de dApps al integrar una configuración completa para pruebas, despliegues y desarrollo continuo.

- 🔒 **OpenZeppelin (AccessControl.sol)**: Biblioteca que proporciona herramientas predefinidas para la gestión de roles y permisos en contratos inteligentes, incrementando la seguridad y reduciendo la complejidad del código.

- 📈 **Arbitrum Sepolia**: Red blockchain escalable y compatible con Ethereum, utilizada para desplegar los contratos inteligentes de SmartHire, garantizando costos reducidos de transacción y alta eficiencia.

## Modelo de Negocios

![Model](https://i.ibb.co/g3zVKRZ/model.png)

## Diagrama de Secuencia

<p align="center">
  <img src="https://i.ibb.co/N1dqRXs/sequence.png" alt="Sequence"/>
</p>

## Caso de Uso General

![Case](https://i.ibb.co/RQ7jVZY/case.png)

# Equipo de Desarrollo

## Desarrollador Principal 

- 🧑🏻 Nombre: Carlos Henríquez 

- 🔍 GitHub: NightmareFox12 

- 💻Rol: Desarrollador Principal 

## Desarrollador y Documentación

- 🧑🏻 Nombre: Miguel Rodríguez 

- 🔍 GitHub: Echizen512 

- 💻Rol: Desarrollador y Documentación 

## Desarrollador

- 🧑🏻 Nombre: Miguel Mejías 

- 🔍 GitHub: miguelmejias0512

- 💻Rol: Desarrollador