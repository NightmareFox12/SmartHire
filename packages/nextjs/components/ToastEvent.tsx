"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useScaffoldWatchContractEvent } from "~~/hooks/scaffold-eth";

const ToastEvent: NextPage = () => {
  const [auditorAddress, setAuditorAddress] = useState<string | undefined>(undefined);
  const [nameTask, setNameTask] = useState<string | undefined>(undefined);
  const [showToastAuditor, setShowAuditor] = useState<boolean>(false);
  const [showToastTask, setShowToastTask] = useState<boolean>(false);

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

  return (
    <>
    {showToastAuditor &&
      <div
        className={`toast toast-end z-50 transition-opacity ease-in-out duration-500 ${showToastAuditor ? "opacity-100" : "opacity-0"}`}
      >
        <div className="alert alert-info">
          <span>New auditor added: {auditorAddress?.slice(0, 5)}...</span>{" "}
        </div>
      </div>
      }
      {showToastTask &&
      <div
        className={`toast toast-end z-50 transition-opacity ease-in-out duration-500 ${showToastTask ? "opacity-100" : "opacity-0"}`}
      >
        <div className="alert alert-info">
          <span>New task added: {nameTask?.slice(0, 20)}...</span>
        </div>
      </div>
      }
    </>
  );
};

export default ToastEvent;