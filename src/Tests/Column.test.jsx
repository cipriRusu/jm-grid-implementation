import React from "react";
import ReactDOM from "react-dom";
import Column from "../Grid/GridBody/GridHeader/Column";
import { GridContext } from "../Grid/Grid";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";

test("Is display name set when name of column is set", () => {
  render(<Column name="SomeInputName" />);
  const element = screen.getByTestId("column-name-display");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("SomeInputName");
});

test("Is display name none when name is not set", () => {
  render(<Column />);
  const element = screen.getByTestId("column-name-display");
  expect(element).toBeInTheDocument();
  expect(element).not.toHaveTextContent();
});

test("Is sort icon hidden when column is not clicked", () => {
  render(<Column />);
  const element = screen.getByTestId("hidden-sort-icon");
  expect(element).toBeInTheDocument();
});

test("Is sort method called when column is clicked", () => {
  const sortMethod = jest.fn();

  const localContext = {
    activeFilter: {
      name: "",
      type: "",
      values: [],
      operator: 0,
    },
    sort: { field_id: "", sort_type: "", field_type: "" },
    filters: [],
    setSort: (args) => sortMethod(args),
  };

  render(
    <GridContext.Provider value={localContext}>
      <Column name="testName" />
    </GridContext.Provider>
  );

  const element = screen.getByTestId("column-name-display");

  fireEvent.click(element);

  const firstArgument = sortMethod.mock.calls[0][0];
  expect(firstArgument).toEqual({
    field_id: "testName",
    sort_type: "asc",
    field_type: undefined,
  });
});

test("Is sort method called with appropriate arguments", () => {
  const sortMethod = jest.fn();

  const localContext = {
    activeFilter: {
      name: "",
      type: "",
      values: [],
      operator: 0,
    },
    sort: { field_id: "", sort_type: "", field_type: "" },
    filters: [],
    setSort: () => sortMethod(),
  };

  render(
    <GridContext.Provider value={localContext}>
      <Column name="testName" />
    </GridContext.Provider>
  );

  const element = screen.getByTestId("column-name-display");
  fireEvent.click(element);
  expect(sortMethod);
});

test("Is hidden icon displayed when no sort is set", () => {
  const localContext = {
    activeFilter: {
      name: "",
      type: "",
      values: [],
      operator: 0,
    },
    sort: { field_id: "", sort_type: "", field_type: "" },
    filters: [],
  };

  render(
    <GridContext.Provider value={localContext}>
      <Column name="testName" />
    </GridContext.Provider>
  );

  const element = screen.getByTestId("hidden-sort-icon");

  expect(element).toBeInTheDocument();
});

test("Is hidden icon not displayed when sort is set", () => {
  const localContext = {
    activeFilter: {
      name: "",
      type: "",
      values: [],
      operator: 0,
    },
    sort: { field_id: "testName", sort_type: "asc", field_type: "" },
    filters: [],
  };

  render(
    <GridContext.Provider value={localContext}>
      <Column name="testName" />
    </GridContext.Provider>
  );

  const element = screen.queryByTestId("hidden-sort-icon");
  expect(element).not.toBeInTheDocument();
});

test("Is up icon displayed when ascending sort is set", () => {
  const localContext = {
    activeFilter: {
      name: "",
      type: "",
      values: [],
      operator: 0,
    },
    sort: { field_id: "testName", sort_type: "asc", field_type: "" },
    filters: [],
  };

  render(
    <GridContext.Provider value={localContext}>
      <Column name="testName" />
    </GridContext.Provider>
  );

  const element = screen.queryByTestId("visible-up-icon");
  expect(element).toBeInTheDocument();
});

test("Is down icon displayed when descending sort is set", () => {
  const localContext = {
    activeFilter: {
      name: "",
      type: "",
      values: [],
      operator: 0,
    },
    sort: { field_id: "testName", sort_type: "desc", field_type: "" },
    filters: [],
  };

  render(
    <GridContext.Provider value={localContext}>
      <Column name="testName" />
    </GridContext.Provider>
  );

  const element = screen.queryByTestId("visible-down-icon");
  expect(element).toBeInTheDocument();
});

test("Column displays no filter when no filter value is applied", () => {
  const localContext = {
    activeFilter: {
      name: "",
      type: "",
      values: [],
      operator: 0,
    },
    sort: { field_id: "", sort_type: "", field_type: "" },
    filters: [
      { name: "testName", type: undefined, values: ["testValue"], operator: 0 },
    ],
  };

  render(
    <GridContext.Provider value={localContext}>
      <Column name="testName" />
    </GridContext.Provider>
  );

  const element = screen.queryByTestId("visible-filter-icon");
  expect(element).toBeInTheDocument();
});

test("Column does not display filter icon when no filter value is applied", () => {
  const localContext = {
    activeFilter: {
      name: "",
      type: "",
      values: [],
      operator: 0,
    },
    sort: { field_id: "", sort_type: "", field_type: "" },
    filters: [],
  };

  render(
    <GridContext.Provider value={localContext}>
      <Column name="testName" />
    </GridContext.Provider>
  );

  const element = screen.queryByTestId("visible-filter-icon");
  expect(element).not.toBeInTheDocument();
});

afterEach(cleanup);
