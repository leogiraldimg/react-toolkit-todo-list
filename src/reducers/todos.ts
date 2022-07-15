import { createAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { Todo } from "../types/Todo";

export interface TodosState {
  list: Todo[];
}

export const addTodo = createAction<Todo>("addTodo");
export const updateTodo = createAction<Todo>("updateTodo");
export const deleteTodo = createAction<string>("deleteTodo");

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState().todos as TodosState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodo, (state, action) => {
        const todo = state.list.find((t) => t.id === action.payload.id);

        if (!todo) {
          state.list.push(action.payload);
        }
      })
      .addCase(updateTodo, (state, action) => {
        const todo = state.list.find((t) => t.id === action.payload.id);

        if (todo) {
          todo.description = action.payload.description;
        }
      })
      .addCase(deleteTodo, (state, action) => {
        const todo = state.list.find((t) => t.id === action.payload);

        if (todo) {
          state.list = state.list.filter((t) => t.id !== todo.id);
        }
      });
  },
});

export default todosSlice.reducer;
