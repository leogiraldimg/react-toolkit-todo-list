import reducer, { addTodo, updateTodo, deleteTodo } from "./todos";
import initialState from "./initialState";
import { Todo } from "../types/Todo";

const todoA: Todo = {
  id: "1",
  description: "Lorem ipsum.",
};

describe("Reducers::Todos", () => {
  const getInitialState = () => {
    return initialState().todos;
  };

  const todoB: Todo = {
    id: "2",
    description: "Integer faucibus.",
  };

  const todoBUpdated: Todo = {
    id: "2",
    description: "Nam ac.",
  };

  const todoC: Todo = {
    id: "3",
    description: "Etiam augue.",
  };

  it("should set initial state by default", () => {
    const action = { type: "unknown" };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it("should handle addTodo", () => {
    const appState = {
      list: [todoA],
    };
    const action = {
      type: addTodo.type,
      payload: todoB,
    };
    const expected = {
      list: [todoA, todoB],
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it("should handle addTodo with existing todo", () => {
    const appState = {
      list: [todoA],
    };
    const action = {
      type: addTodo.type,
      payload: todoA,
    };
    const expected = {
      list: [todoA],
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it("should handle updateTodo", () => {
    const appState = {
      list: [todoA, todoB],
    };
    const action = {
      type: updateTodo.type,
      payload: todoBUpdated,
    };
    const expected = {
      list: [todoA, todoBUpdated],
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it("should handle updateTodo with todo not found", () => {
    const appState = {
      list: [todoA, todoB],
    };
    const action = {
      type: updateTodo.type,
      payload: todoC,
    };
    const expected = {
      list: [todoA, todoB],
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it("should handle deleteTodo", () => {
    const appState = {
      list: [todoA, todoB],
    };
    const action = {
      type: deleteTodo.type,
      payload: todoB.id,
    };
    const expected = {
      list: [todoA],
    };

    expect(reducer(appState, action)).toEqual(expected);
  });

  it("should handle deleteTodo with todo not found", () => {
    const appState = {
      list: [todoA, todoB],
    };
    const action = {
      type: deleteTodo.type,
      payload: todoC.id,
    };
    const expected = {
      list: [todoA, todoB],
    };

    expect(reducer(appState, action)).toEqual(expected);
  });
});
