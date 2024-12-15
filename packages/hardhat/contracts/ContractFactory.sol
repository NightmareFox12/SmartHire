// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./TaskContract.sol";

contract ContractFactory {
  mapping(string => address) tastkContracts;

  function createContract(string memory _nameDao) public returns (address daoAddress) {
    TaskContract newTaskContract = new TaskContract(msg.sender);
    tastkContracts[_nameDao] = address(newTaskContract);

    return address(newTaskContract);
  }

  function getContractAddress(string memory _nameDao) public view returns (address) {
    return tastkContracts[_nameDao];
  }
  //SE ME OCURRIO HACER UN MAPPING O ALGO POR EL ESTILO PARA REGISTRAR A LOS USUARIOS QUE ENTREN... aunque habra que hacer algo cuando entre un user
}
