import { ISortable } from "./ISortable";
import { IHeader } from "./IHeader";

export interface IContainerProps extends ISortable {
  header_content: IHeader;
}
