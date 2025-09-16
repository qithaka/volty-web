interface Props {
  className: string;
}

export default function Header({ className }: Props) {
  return (
    <header
      className={[
        className,
        'h-14 min-h-14 flex flex-row items-center justify-between sticky top-0 gap-7 z-50 before:absolute before:top-0 before:content-[""] before:block before:h-14 before:bg-[var(--accent-color)] before:backdrop-blur-lg before:w-full before:-z-10 before:border-b before:border-b-[var(--highlight-color)] before:left-0',
      ].join(' ')}
    ></header>
  );
}
