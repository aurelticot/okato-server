export enum EffectivityStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface Effectivity {
  status: EffectivityStatus;
  startDate: string;
  endDate?: string;
}

export interface Metadata {
  creationDate: string;
  modificationDate: string;
}
