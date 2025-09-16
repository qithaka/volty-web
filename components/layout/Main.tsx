interface Props {
  className: string;
}

export default function Main({ className }: Props) {
  return (
    <main
      className={[
        className,
        'grow flex flex-col items-start justify-items-start !pt-14 z-10',
      ].join(' ')}
    ></main>
  );
}
