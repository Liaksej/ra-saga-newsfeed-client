export enum SagasActions {
  LOAD_FIRST_BUNCH_OF_DATA = "LOAD_FIRST_BUNCH_OF_DATA",
  LOAD_NEXT_BUNCH_OF_DATA = "LOAD_NEXT_BUNCH_OF_DATA",
}

export function loadFirstBunchOfData() {
  return {
    type: SagasActions.LOAD_FIRST_BUNCH_OF_DATA,
  };
}

export function loadNextBunchOfData(id: string) {
  return {
    type: SagasActions.LOAD_NEXT_BUNCH_OF_DATA,
    payload: id,
  };
}
