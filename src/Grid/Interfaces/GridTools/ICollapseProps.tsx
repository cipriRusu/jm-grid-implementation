import { ICollapse } from "./ICollapse";

export interface ICollapseProps extends ICollapse {
  showCollapseHandler: () => void;
  icon: string;
  title: string;
}
