import { createContext, useContext, useState, type ReactNode } from 'react';

export type Worker = {
  name: string;
  task: 'Inspection' | 'Cleaning';
  roomNo: number;
  guestArriving: string;
  priorityScore: number;
};

export const workers: Worker[] = [
  {
    name: 'Varun Goel',
    task: 'Inspection',
    roomNo: 1342,
    guestArriving: '11:00 AM',
    priorityScore: 77,
  },
  {
    name: 'Ridhima Shinde',
    task: 'Cleaning',
    roomNo: 522,
    guestArriving: '9:00 AM',
    priorityScore: 25,
  },
];

type WorkerContextValue = {
  selectedWorker: Worker;
  setSelectedWorker: (worker: Worker) => void;
};

const WorkerContext = createContext<WorkerContextValue | null>(null);

export function WorkerProvider({ children }: { children: ReactNode }) {
  const [selectedWorker, setSelectedWorker] = useState(workers[0]);

  return (
    <WorkerContext.Provider value={{ selectedWorker, setSelectedWorker }}>
      {children}
    </WorkerContext.Provider>
  );
}

export function useWorker() {
  const context = useContext(WorkerContext);

  if (!context) {
    throw new Error('useWorker must be used inside WorkerProvider');
  }

  return context;
}
