import Link from "next/link";
import style from "./style.module.scss";

interface GradientButtonProps {
  value: string;
  href?: string;
  onClick?: (e: any) => void;
  padding: number;
}

export const GradientButton = ({
  value,
  href,
  onClick,
  padding,
}: GradientButtonProps) => {
  function renderButton() {
    return (
      <button className={style.button} onClick={onClick} style={{ padding }}>
        {value}
      </button>
    );
  }

  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
};

