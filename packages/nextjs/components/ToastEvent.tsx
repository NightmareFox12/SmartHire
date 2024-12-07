"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useScaffoldWatchContractEvent } from "~~/hooks/scaffold-eth";

const ToastEvent: NextPage = () => {
  //states
  const [auditorAddress, setAuditorAddress] = useState<string | undefined>(undefined);
  const [nameTask, setNameTask] = useState<string | undefined>(undefined);
  const [addressUser, setAddressUser] = useState<string | undefined>(undefined);
  const [showToastAuditor, setShowAuditor] = useState<boolean>(false);
  const [showToastTask, setShowToastTask] = useState<boolean>(false);
  const [showToastUser, setShowToastUser] = useState<boolean>(false);

  useEffect(() => {
    if (auditorAddress !== undefined) {
      setShowAuditor(true);
      setTimeout(() => {
        setShowAuditor(false);
      }, 2500);
    }
  }, [auditorAddress]);

  useEffect(() => {
    if (nameTask !== undefined) {
      setShowToastTask(true);
      setTimeout(() => {
        setShowToastTask(false);
      }, 2500);
    }
  }, [nameTask]);

  useEffect(() => {
    if (addressUser !== undefined) {
      setShowToastUser(true);
      setTimeout(() => {
        setShowToastUser(false);
      }, 2500);
    }
  }, [addressUser]);

  //events
  useScaffoldWatchContractEvent({
    contractName: "TaskContract",
    eventName: "AuditorAdded",
    onLogs: logs => {
      logs.map(log => {
        const { auditor } = log.args;
        if (auditor !== undefined) setAuditorAddress(auditor.toString());
      });
    },
  });

  useScaffoldWatchContractEvent({
    contractName: "TaskContract",
    eventName: "TaskAdded",
    onLogs: logs => {
      logs.map(log => {
        const { name } = log.args;
        if (name !== undefined) setNameTask(name);
      });
    },
  });

  useScaffoldWatchContractEvent({
    contractName: "TaskContract",
    eventName: "UserAdded",
    onLogs: logs => {
      logs.map(log => {
        const { userAddress } = log.args;
        if (userAddress !== undefined) setAddressUser(userAddress);
      });
    },
  });

  return (
    <>
      {showToastAuditor && (
        <div
          className={`toast toast-end z-50 transition-opacity ease-in-out duration-500 ${showToastAuditor ? "opacity-100" : "opacity-0"}`}
        >
          <div className="alert bg-primary">
            <span>New auditor added: {auditorAddress?.slice(0, 6)}...</span>{" "}
          </div>
        </div>
      )}
      {showToastTask && (
        <div
          className={`toast toast-end z-50 transition-opacity ease-in-out duration-500 ${showToastTask ? "opacity-100" : "opacity-0"}`}
        >
          <div className="alert bg-primary">
            <span>New task added: {nameTask?.slice(0, 20)}...</span>
          </div>
        </div>
      )}
      {showToastUser && (
        <div
          className={`toast toast-end z-50 transition-opacity ease-in-out duration-500 ${showToastUser ? "opacity-100" : "opacity-0"}`}
        >
          <div className="alert bg-primary">
            <span>New user added: {addressUser?.slice(0, 6)}...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ToastEvent;
