import { PartyPopper } from "lucide-react";
import { Link } from "react-router";

interface Props {
    subTitle?: string;
}

export const CustomLogo = ({subTitle = 'BookIt'}: Props) => {
  return (
    <Link to="/" className="flex items-center whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary flex items-center justify-center">
            <PartyPopper className="size-7" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-text-dark dark:text-white">
            {subTitle}
          </h1>
        </div>
    </Link>
  )
}