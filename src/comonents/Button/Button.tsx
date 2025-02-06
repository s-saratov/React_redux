import { ButtonProps } from "./types";
import { MainButton } from "./styles";

function Button({
  name = "SEND",
  type = "button",
  onClick,
  disabled = false,
  isRed = false,
}: ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick} disabled={disabled} $isRed={isRed}>
      {name}
    </MainButton>
  );
}
export default Button;