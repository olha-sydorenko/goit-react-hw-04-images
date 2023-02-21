import { StyledButton } from './Button.styled';
export const Button = ({ onClick }) => {
  return (
    <StyledButton type="submit" onClick={onClick}>
      Load more
    </StyledButton>
  );
};
