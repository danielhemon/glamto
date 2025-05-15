import Link from "next/link";
import { CustomButtomProps } from "../types";

export default function Hero({
  title,
  containerStyles,
  disabled,
  handleClick,
}: CustomButtomProps) {
  return (
    <Link href="https://wa.me/message/4Y4RFTTWZYIFK1">
      <button
        className={`${containerStyles}`}
        disabled={false}
        type={"button"}
        onClick={handleClick}
      >
        <span>{title}</span>
      </button>
    </Link>
  );
}
