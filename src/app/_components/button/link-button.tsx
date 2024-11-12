import clsx from 'clsx';
import Link from 'next/link';

export default function LinkButton(
    {
        children, className = "", href
    }:
    {
        children: React.ReactNode,
        className?: string,
        href: string
    }
) {
    return (
        <Link
            className={clsx(
                'flex h-[60px] items-center rounded-full bg-blue px-[32px] md:px-[70px] text-2xl font-medium text-white transition-colors hover:bg-orange-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-orange-primary aria-disabled:cursor-not-allowed aria-disabled:opacity-50 border-b-4 border-blue-primary drop-shadow-md',
                className,
            )}
            href={href}
        >
            {children}
        </Link>
    )
}