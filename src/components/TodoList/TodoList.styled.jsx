import styled from '@emotion/styled';

export const ListTodo = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 24px;
`;

export const TodoListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;

    background-color: #4caf50;

    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &--completed::before {
    transform: scaleX(1);
  }
`;

// .TodoList__text {
//   margin-top: 0;
//   margin-bottom: 0;
//   margin-right: 24px;
//   margin-left: 24px;

//   .TodoList__item--completed & {
//     text-decoration: line-through;
//   }
// }

// .TodoList__checkbox {
//   cursor: pointer;
//   width: 30px;
//   height: 30px;
// }

// .TodoList__btn {
//    border: none;
//   font: inherit;
//   cursor: pointer;
//   outline: none;

//   margin-left: auto;
//   border-radius: 4px;
//   padding: 12px 24px;
//   background-color: #3f51b5;
//   color: #fff;
//   font-weight: 500;

//   &:hover,
//   &:focus {
//     background-color: #303f9f;
//   }

//   &:active {
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
//   }
// }
