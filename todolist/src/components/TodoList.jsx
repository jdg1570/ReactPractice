import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="JUnit 캐피탈" done={true} />
      <TodoItem text="짐정리" done={false} />
      <TodoItem text="청소" done={false} />
      <TodoItem text="빨래" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
