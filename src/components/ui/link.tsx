export const CustomLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white font-semibold underline decoration-zinc-500 hover:decoration-white transition-colors"
  >
    {children}
  </a>
);
