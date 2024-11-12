import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-[60px] items-center rounded-3xl bg-blue px-[70px] text-2xl font-medium text-white transition-colors hover:bg-orange-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-orange-primary aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}
