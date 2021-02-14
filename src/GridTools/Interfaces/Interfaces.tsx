export interface IViewPartProps {
    items : string[],
    onChildClick: (e: string) => void,
    selectedItem: string

} 

export interface IViewItemProps {
    item: string
}
  