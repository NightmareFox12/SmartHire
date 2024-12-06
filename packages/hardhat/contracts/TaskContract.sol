// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract TaskContract is AccessControl {
    //roles
    bytes32 public constant AUDITOR_ROLE = keccak256("AUDITOR_ROLE");
    bytes32 public constant USER_ROLE = keccak256("USER_ROLE");

    uint256 public taskID = 0;
    uint256 auditorID = 0;
		uint256 userID = 0;
    address public admin;

    struct Task {
        uint256 taskID;
        string name;
        string description;
        uint256 reward;
        address payable responsible;
        bool completed;
    }

    struct Auditor {
        uint256 auditorID;
        address auditorAddress;
        bool block;
    }

    mapping(uint256 => Task) public tasks;
    mapping(uint256 => Auditor) public auditors;
		mapping(uint256 => address) public users;

    //events
    event AuditorAdded(address indexed auditor);
    event TaskAdded(uint256 indexed taskID, string name);

    //constructor
    constructor(address _admin) {
        admin = _admin;
        _grantRole(DEFAULT_ADMIN_ROLE, _admin);
    }

    //functions
    function addUser(address _addressUser) public onlyRole(DEFAULT_ADMIN_ROLE) onlyRole(AUDITOR_ROLE) {
      require(_addressUser != address(0), "User address cannot be zero address");
      require(admin != _addressUser, "Admin cannot be user");

			require(!getAuditorForAddress(_addressUser), "Address is already an auditor");
			//verificar que el address no este en el auditor
			users[userID] = _addressUser;
			userID++;
    }

    function createTask(string memory _name, string memory _description) public payable onlyRole(DEFAULT_ADMIN_ROLE) {
        require(bytes(_name).length > 0, "Task name cannot be empty");
        require(bytes(_description).length > 0, "Task description cannot be empty");
        require(msg.value > 0, "A reward must be provided");

        tasks[taskID] = Task(taskID, _name, _description, msg.value, payable(address(0)), false);

        taskID++;
        emit TaskAdded(taskID, _name);
    }

    function createTaskWithResponsible(
        string memory _name,
        string memory _description,
        address _responsible
    ) public payable onlyRole(DEFAULT_ADMIN_ROLE) {
        require(bytes(_name).length > 0, "Task name cannot be empty");
        require(bytes(_description).length > 0, "Task description cannot be empty");
        require(msg.value > 0, "A reward must be provided");
        require(admin != _responsible, "Address is admin");

        tasks[taskID] = Task(taskID, _name, _description, msg.value, payable(_responsible), false);

        taskID++;
        emit TaskAdded(taskID, _name);
    }

    function getTask(uint256 _taskID) public view returns (string memory, string memory) {
        Task storage task = tasks[_taskID];
        return (task.name, task.description);
    }

    function getAllTasks()
        public
        view
        onlyRole(DEFAULT_ADMIN_ROLE)
        onlyRole(DEFAULT_ADMIN_ROLE)
        returns (Task[] memory)
    {
        Task[] memory taskList = new Task[](taskID);
        for (uint256 i = 0; i < taskID; i++) {
            Task storage task = tasks[i];
            taskList[i] = task;
        }
        return taskList;
    }

    function getTasksByResponsible() public view returns (Task[] memory) {
        require(msg.sender != address(0), "Sender address is required");
        uint256 count = 0;
        for (uint256 i = 0; i < taskID; i++) {
            if (tasks[i].responsible == msg.sender) count++;
        }

        Task[] memory result = new Task[](count);

        uint256 index = 0;
        for (uint256 i = 0; i < taskID; i++) {
            if (tasks[i].responsible == msg.sender) {
                result[index] = tasks[i];
                index++;
            }
        }
        return result;
    }

    function getTasksWithoutResponsible() public view returns (Task[] memory) {
        uint256 count = 0;
        uint256 index = 0;

        for (uint256 i = 0; i < taskID; i++) {
            if (tasks[i].responsible == address(0)) count++;
        }

        Task[] memory tasksWithoutResponsible = new Task[](count);

        for (uint256 i = 0; i < taskID; i++) {
            if (tasks[i].responsible == address(0)) {
                tasksWithoutResponsible[index] = tasks[i];
                index++;
            }
        }

        return tasksWithoutResponsible;
    }

    function acceptTask(uint256 _taskID) public {
        require(msg.sender != address(0), "Sender address is required");
        require(msg.sender != admin, "Address is admin");
        require(tasks[_taskID].responsible == address(0), "Task must have a responsible assigned");

        tasks[_taskID].responsible = payable(msg.sender);
    }

    function addAuditor(address _auditorAddress) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(_auditorAddress != address(0), "Auditor address cannot be zero address");
        require(admin != _auditorAddress, "Admin cannot be auditor");
        require(!getAuditorForAddress(_auditorAddress), "adress exist");

        auditors[auditorID] = Auditor(auditorID, _auditorAddress, false);
        _grantRole(AUDITOR_ROLE, _auditorAddress);
        auditorID++;

        emit AuditorAdded(_auditorAddress);
    }

    function getAllAuditors() public view returns (Auditor[] memory) {
        Auditor[] memory auditorList = new Auditor[](auditorID);
        for (uint256 i = 0; i < auditorID; i++) {
            Auditor storage auditor = auditors[i];
            auditorList[i] = auditor;
        }
        return auditorList;
    }

    function getAuditorForAddress(address _auditorAddress) public view returns (bool) {
        for (uint256 i = 0; i <= auditorID; i++) {
            if (auditors[i].auditorAddress == _auditorAddress) return true;
        }
        return false;
    }

    function blockAuditor(uint256 _auditorID) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(auditors[_auditorID].auditorAddress != address(0), "Auditor does not exist");
        auditors[_auditorID].block = true;
        _revokeRole(AUDITOR_ROLE, auditors[_auditorID].auditorAddress);
    }

    function unlockAuditor(uint256 _auditorID) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(auditors[_auditorID].auditorAddress != address(0), "Auditor does not exist");
        auditors[_auditorID].block = false;
        _grantRole(AUDITOR_ROLE, auditors[_auditorID].auditorAddress);
    }
}
