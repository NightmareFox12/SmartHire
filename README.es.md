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

## Diagrama de Secuencia - Admin

<p align="center">
  <img src="https://i.ibb.co/N1dqRXs/sequence.png" alt="Sequence"/>
</p>

## Caso de Uso General

![Case](https://i.ibb.co/RQ7jVZY/case.png)

# Equipo de Desarrollo

## Desarrollador Principal 

- 🧑🏻 **Nombre:** Carlos Henríquez 

- 🔍 **GitHub:** NightmareFox12 

- 💻 **Rol:** Desarrollador Principal 

## Desarrollador y Documentación

- 🧑🏻 **Nombre:** Miguel Rodríguez 

- 🔍 **GitHub:** Echizen512 

- 💻 **Rol:** Desarrollador y Documentación 

## Desarrollador

- 🧑🏻 **Nombre:** Miguel Mejías 

- 🔍 **GitHub:** miguelmejias0512

- 💻**Rol:** Desarrollador

# Flujo de Trabajo del Smart Contract para la Gestión de Tareas 🔑🚀

Este flujo de trabajo describe el proceso de interacción con el TaskContract y sus diversas funciones, incluyendo la gestión de usuarios, creación de tareas, asignación de tareas, finalización de tareas y verificación de tareas. El contrato utiliza AccessControl para gestionar roles y permisos.

## 1️⃣ Inicialización del Contrato 📜
- **Rol de Admin**: El contrato se despliega con una dirección de admin que tiene control total sobre el sistema. El admin recibe el DEFAULT_ADMIN_ROLE a través de AccessControl de OpenZeppelin.

## 2️⃣ Gestión de Usuarios 👥

**Añadir Usuario 🆕**

- Quién: Admin o Auditor

- Acción: El contrato permite que el admin o auditor añadan un nuevo usuario.

**Pasos**:
- Asegurarse de que la dirección proporcionada no sea la dirección cero.

- El usuario no puede ser el admin ni tener ya un rol de auditor.

- Se concede el rol de usuario a la dirección proporcionada.

- Se emite un evento UserAdded.

**Obtener Todos los Usuarios 📑**

**Quién:** Admin o Auditor

- Acción: Recupera todas las direcciones de los usuarios.

**Pasos:**
- Asegurarse de que el llamador tenga el ADMIN_ROLE o AUDITOR_ROLE.

- Se devuelve la lista de todos los usuarios.

**Obtener Usuario por Dirección 🔍**

**Quién:** Cualquiera

**Acción:** Verifica si una dirección es un usuario registrado.

**Pasos:**
- Asegurarse de que la dirección no sea la dirección cero.

- Devuelve true si la dirección es un usuario.

## 3️⃣ Creación de Tareas 🛠️

**Crear Tarea 📝**

**Quién:** Admin

**Acción:** El admin crea una tarea con una recompensa.

**Pasos:**
- Asegurarse de que el nombre de la tarea, descripción y reglas no estén vacíos.

- El admin proporciona una recompensa (valor diferente a cero).

- La tarea se añade al sistema y se emite un evento TaskAdded.

**Crear Tarea con Persona Responsable 👤**

**Quién:** Admin

**Acción:** El admin crea una tarea y asigna un usuario responsable.

**Pasos:**

- Asegurarse de que el nombre de la tarea, descripción y reglas no estén vacíos.

- El usuario responsable no puede ser un admin ni un auditor.

- La tarea se añade y el usuario recibe el rol de USER_ROLE si no lo tiene asignado.

- Se emiten los eventos TaskAdded y UserAdded.

**Obtener Detalles de la Tarea 📋**

**Quién:** Cualquiera

**Acción:** Recupera el nombre y la descripción de la tarea utilizando el ID de la tarea.

**Pasos:** Devuelve el nombre y la descripción de la tarea.

## 4️⃣ Asignación de Tareas 📑

**Aceptar Tarea ✅**

**Quién:** Usuario

**Acción:** Un usuario acepta una tarea no asignada.

**Pasos:**

- Asegurarse de que el usuario no sea el admin ni un auditor.

- La tarea debe estar sin asignar.

- Si el usuario no está registrado, se le asigna el rol de USER_ROLE.

- El usuario es marcado como el responsable de la tarea.

## 5️⃣ Finalización de Tareas 🏁

**Completar Tarea 🏆**

**Quién:** Usuario

**Acción:** El usuario presenta prueba de que completó la tarea.

**Pasos:**

- Asegurarse de que la tarea exista y no esté ya completada.

- Debe presentarse prueba de la finalización.

- Se crea un registro TaskCompleted con la prueba.

- La tarea se marca como "no verificada" y "no liberada".

## 6️⃣ Verificación de Tareas ✅

**Verificar Tarea 🔍**

**Quién:** Admin o Auditor

**Acción:** El admin o auditor verifica la finalización de la tarea.

**Pasos:**

- Asegurarse de que el llamador tenga el ADMIN_ROLE o AUDITOR_ROLE.

- Verificar que la tarea exista y que se haya proporcionado la prueba.

- Si la tarea es verificada, el auditor o admin se convierte en el verificador y aprueba la tarea.

- La recompensa se transfiere al usuario responsable.

## 7️⃣ Liberación de Tareas 💸

**Liberar Recompensa 💰**

**Quién:** Admin o Auditor

**Acción:** Libera la recompensa al usuario responsable tras la verificación de la tarea.

**Pasos:**
- La tarea debe estar verificada.

- Si es verificada, la recompensa se transfiere a la dirección responsable.

- Se emite un evento TaskCompleted para confirmar la liberación de la tarea.

## 8️⃣ Gestión de Auditores 🕵️‍♂️

**Añadir Auditor 🔑**

**Quién:** Admin

**Acción:** El admin puede asignar un rol de auditor.

**Pasos:**

- El admin concede el rol de AUDITOR_ROLE a una nueva dirección.
- Se emite un evento AuditorAdded.

**Obtener Lista de Auditores 📋**

**Quién:** Admin o Auditor

**Acción:** Recupera la lista de todos los auditores.

**Pasos:**

- Se devuelve la lista de direcciones de los auditores.

## 9️⃣ Características Adicionales ⚙️

**Obtener Tareas por Responsable 👤**

**Quién:** Usuario

**Acción:** Recupera todas las tareas asignadas al llamador.

**Pasos:**

- El llamador debe tener el rol USER_ROLE.

- Devuelve las tareas asignadas al usuario.

**Obtener Tareas Sin Responsable ❌**

**Quién:** Cualquiera

**Acción:** Recupera las tareas que no tienen un responsable asignado.

**Pasos:**

- Devuelve las tareas sin una dirección responsable.

**Obtener Tarea Completada 🏅**

**Quién:** Admin o Auditor

**Acción:** Recupera una tarea completada por su ID.

**Pasos:**

- Devuelve la tarea completada basada en el ID de la tarea.

## 1️⃣0️⃣ Manejo de Eventos 📣

- **AuditorAdded:** Emitido cuando se añade un nuevo auditor.

- **TaskAdded:** Emitido cuando se crea una nueva tarea.

- **UserAdded:** Emitido cuando se añade un nuevo usuario.

# 🌐 Usando AccessControl en Solidity Smart Contracts 🔒

En este archivo, explicamos cómo funciona la característica `AccessControl` en un **Smart Contract** en Solidity, una herramienta que permite gestionar roles y permisos de acceso para que funciones específicas en tu contrato solo puedan ser ejecutadas por usuarios autorizados. ¡Vamos a empezar! 🚀

## 🔑 ¿Qué es AccessControl? 🛡️

`AccessControl` es una librería de **OpenZeppelin** utilizada para implementar un sistema de control de acceso en un smart contract. Este sistema gestiona quién puede ejecutar qué funciones dentro del contrato a través de **roles**. Los roles están representados como identificadores únicos que determinan los permisos de los usuarios. 🎫

### 📝 Roles Comunes

1. **Administrador (`DEFAULT_ADMIN_ROLE`)**: 🔑 Este rol tiene **todos** los permisos en el contrato, y puede asignar o revocar roles para otros usuarios. ¡Un rol muy poderoso! ⚡
2. **Auditores (`AUDITOR_ROLE`)**: 👩‍⚖️👨‍⚖️ Este rol se usa para permitir que ciertos usuarios validen acciones, como comprobar si una tarea ha sido completada.
3. **Usuarios (`USER_ROLE`)**: 👤 Estos usuarios pueden aceptar tareas, completarlas y participar en el sistema.

## ⚙️ ¿Cómo Funciona? 🔍

El **smart contract** en este ejemplo usa `AccessControl` para gestionar eficientemente los roles y permisos.

### 1. **Definiendo Roles** 📋

En nuestro contrato, definimos los roles como constantes `bytes32` de la siguiente manera:

```solidity
bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");
bytes32 public constant USER_ROLE = keccak256("USER_ROLE");
```

Cada rol es representado por un identificador único, generado usando la función keccak256.

### 2. Asignando Roles 👥

Los roles normalmente se asignan a las direcciones de los usuarios cuando el contrato es desplegado. Por ejemplo, un administrador (que tiene todos los permisos) se asigna durante la creación del contrato:

```solidity
constructor(address _admin) {
    admin = _admin;
    _grantRole(DEFAULT_ADMIN_ROLE, _admin); // Admin gets all permissions
}
```

## 3. Control de Acceso en Funciones 🔐

Las funciones en el contrato solo pueden ser ejecutadas por usuarios con roles específicos. Esto se gestiona utilizando la función hasRole(), que verifica si la dirección que llama tiene el rol adecuado. 🧐

**Ejemplo 1: Crear una Tarea 🎯**

Solo los administradores pueden crear nuevas tareas. Si un usuario sin el rol adecuado intenta hacerlo, la transacción fallará:


```solidity
function createTask(string memory _name, string memory _description, string memory _rules)
    public
    payable
    onlyRole(DEFAULT_ADMIN_ROLE) // Only administrators
{
    // Task creation logic
}
```

**Ejemplo 2: Verificar la Completitud de una Tarea ✅**

Para verificar si una tarea ha sido completada correctamente, solo los administradores o auditores pueden ejecutar la función:

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

**Revocar Roles 🔄**

¡Los roles también pueden ser revocados! Si un usuario ya no necesita un rol, un administrador puede eliminarlo fácilmente:

```solidity
_revokeRole(USER_ROLE, userAddress); // Revoke user role
```

Esto asegura que los permisos se gestionen apropiadamente a medida que evolucionan las necesidades del sistema. 🔄

## 🎯 Beneficios de Usar AccessControl 🛠️

- **Seguridad 🔒:** Asegura que solo los usuarios con los permisos adecuados puedan ejecutar ciertas acciones en el contrato.
Flexibilidad ⚙️: Permite añadir o eliminar roles fácilmente a medida que el sistema evoluciona.

- **Auditoría 🔍:** Permite que los auditores revisen las acciones sin comprometer la seguridad del contrato.

## 🛑 Conclusión 🚀
¡Eso es todo! Usar AccessControl en Solidity te da un control total sobre quién puede hacer qué dentro de tu smart contract. Esta herramienta mejora la seguridad 🔒, la flexibilidad ⚙️, y asegura que solo los usuarios autorizados 👤 interactúen con funciones sensibles. ¡No olvides que gestionar los permisos es clave para contratos más seguros y eficientes! 🎯