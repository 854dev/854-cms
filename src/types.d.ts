interface EmitterItem {
  emitterName: string;
  functionToExecute: Function;
}

interface Emitter {
  on: (
    emitterName: EmitterItem["emitterName"],
    functionToExecute: EmitterItem["functionToExecute"]
  ) => void;
  once: (emitterName: EmitterItem["emitterName"], options: any) => void;
  emit: (emitterName: EmitterItem["emitterName"], options: any) => void;
}
