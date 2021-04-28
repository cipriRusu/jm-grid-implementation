import { useContext } from "react";
import { Form } from "react-bootstrap";
import { GridContext } from "../Grid";
import { IColumn } from "../Interfaces/GridBody/IColumn";
import { IFilter } from "../Interfaces/GridTools/IFilter";

const BooleanFilter = (props: any) => {
    let optionsForBoolean = [true, false];

    let gridContext = useContext(GridContext);

    const addBooleanFilter = (header: IColumn, checked: boolean, option: boolean) => {
        let filters = gridContext.filters;

        if (checked === true) {
            if (filters.some((x: IFilter) => x.name === header.name)) {
                let defaultFilter = filters.filter((x: IFilter) => x.name === header.name)[0];

                if (defaultFilter.value !== undefined) {
                    defaultFilter.value = defaultFilter.value.concat(option);

                    gridContext.setFilter(filters);
                }
            } else {
                let newFilter = {
                    name: header.name,
                    type: header.type,
                    value: [option],
                    operator: 0
                };

                let updatedFilters = [
                    ...gridContext.filters,
                    newFilter
                ];

                gridContext.setFilter(updatedFilters);
            }
        }

        if (checked === false) {
            if (filters.some((x: IFilter) => x.name === header.name)) {
                let defaultFilter = filters.filter((x: IFilter) => {
                    return x.name === header.name;
                })[0];

                if (defaultFilter.value !== undefined) {
                    defaultFilter.value = defaultFilter.value.filter((x: boolean) => {
                        return x !== option;
                    });

                    if (defaultFilter.value.length === 0) {
                        filters = filters.filter((x: IFilter) => {
                            return x.name !== header.name;
                        });
                    }

                    gridContext.setFilter(filters);
                }
            }
        }
    };

    const addAllBooleanFilters = (header: IColumn, checked: boolean, options: boolean[]) => {
        let filters = gridContext.filters;

        if (checked === true) {
            if (gridContext.filters.some((x: IFilter) => {
                return x.name === header.name
            })) {
                let defaultFilter = filters.filter((x: IFilter) => x.name === header.name)[0];

                if (defaultFilter !== undefined) {
                    defaultFilter.value = [true, false];

                    gridContext.setFilter(filters);
                }
            } else {
                let newFilter = {
                    name: header.name,
                    type: header.type,
                    value: options,
                    operator: 0
                }

                let updatedFilters = [
                    ...filters,
                    newFilter
                ];

                gridContext.setFilter(updatedFilters);
            }
        }

        if (checked === false) {
            if (checked === false) {
                let filters = gridContext.filters;

                let defaultFilters = filters;

                let updatedFilters = defaultFilters.filter((x: IFilter) => {
                    return x.name !== header.name;
                });

                gridContext.setFilter(updatedFilters);
            }
        }
    }

    const capitalizeWord = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const DisplayCheck = (header: IColumn, options: boolean[]) => {
        let appliedFilters = gridContext.filters.filter((x: IFilter) => {
            return x.name === header.name;
        })

        return appliedFilters.some((x: IFilter) => {
            return options.every((y: boolean) => {
                return x.value.includes(y);
            })
        })
    }

    return (<>
        <Form.Check className="all-selector" type="checkbox"
            label={"Select All"}
            checked={
                DisplayCheck(props.header, [true, false])
            }
            onChange={
                (e: any) => {
                    addAllBooleanFilters(props.header, e.target.checked, [true, false]);
                }
            }
            onKeyPress={
                        (e: any) => {
                            if (e.key === "Enter") {
                                let activeElement = document.activeElement as HTMLElement;

                                if (activeElement !== null) {
                                    activeElement.click();
                                }
                            }
                        }
                    }
        ></Form.Check>
        {
            optionsForBoolean.map((option: any, key: number) => {
                return (<Form.Check key={key}
                    className="form-check"
                    checked={
                        DisplayCheck(props.header, [option])
                    }
                    type="checkbox"
                    label={
                        capitalizeWord(option.toString())
                    }
                    onChange={
                        (e: any) => {
                            addBooleanFilter(props.header, e.target.checked, option);
                        }
                    }
                    onKeyPress={
                        (e: any) => {
                            if (e.key === "Enter") {
                                let activeElement = document.activeElement as HTMLElement;

                                if (activeElement !== null) {
                                    activeElement.click();
                                }
                            }
                        }
                    }></Form.Check>);
            })
        } </>);
};

export default BooleanFilter;