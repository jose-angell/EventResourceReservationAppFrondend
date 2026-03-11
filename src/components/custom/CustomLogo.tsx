import { Link } from "react-router";

interface Props {
    subTitle?: string;
}

export const CustomLogo = ({subTitle = 'Shop'}: Props) => {
  return (
    <Link to="/" className="flex items-center whitespace-nowrap">
        <div className="size-8 text-brand-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">celebration</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-brand-text-dark">BookIt</h1>
        <p className='text-muted-foreground m-0 px-2 whitespace-nowrap'>{subTitle}</p>
    </Link>
  )
}