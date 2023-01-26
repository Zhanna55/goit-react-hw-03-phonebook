import styled from '@emotion/styled';

const Contacts = styled.ul`
  padding: 0;
  list-style-type: circle;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const DeleteButton = styled.button`
  height: 25px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: blue;
  }
`;

export { Contacts, ContactItem, DeleteButton };
