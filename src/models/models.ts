export type Visitor = {
  id: string;
  name: string;
  company: string;
  group?: string;
  online?: boolean;
};

export enum FilterByState {
  all = "all",
  online = "online",
  offline = "offline",
}
