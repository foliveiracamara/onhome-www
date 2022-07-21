import style from "./style.module.scss";

interface GradientTextProps {
    value: string;
    fontSize: number;
    textAlign: "center" | "left";
    padding?: number;
    margin?: string | number;
    fontWeight?: number;
}

const GradientText = ({
    value,
    fontSize,
    textAlign,
    padding,
    margin,
    fontWeight
}: GradientTextProps) => {
    return (
        <div className={style.gradient}>
            <h1 style={{
                fontSize: `${fontSize}px`,
                textAlign: `${textAlign}`,
                padding: `${padding}px`,
                margin: `${margin}`,
                fontWeight: `${fontWeight}`
            }}>
                {value}
            </h1>
        </div>
    )
}

export default GradientText