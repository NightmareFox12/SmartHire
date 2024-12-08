export interface ITask {
  taskID: bigint;
  name: string;
  description: string;
  reward: bigint;
  responsible: string;
  completed: boolean;
}