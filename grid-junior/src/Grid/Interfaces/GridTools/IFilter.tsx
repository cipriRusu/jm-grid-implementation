export interface IFilter {
  name: string;
  type?: string;
  value?: string;
  operator?: number;
  selection?: string[];
  boolean?: boolean[];
}
