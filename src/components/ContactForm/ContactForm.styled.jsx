import styled from '@emotion/styled';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid black;
  padding: 15px;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;
const FormButton = styled.button`
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

export { FormContainer, FormLabel, FormButton };
