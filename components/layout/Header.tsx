interface Props {
  className: string;
}

export default function Header({ className }: Props) {
  return <header className={className}></header>;
}
