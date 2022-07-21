import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import styles from "./GradientBorder.module.scss";

interface BorderProps {
  children: ReactJSXElement;
  padding?: number;
  textAlign?: string;
  onClick?: (e: any) => void;
}

export const GradientBorder = ({ 
  children, 
  padding, 
  onClick 
}: BorderProps) => {
  return (
    <div 
      className={styles.border} 
      style={{ padding, borderRadius: "28px" }} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};

