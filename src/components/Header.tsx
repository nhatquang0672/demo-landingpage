export function NavItems() {
  return (
    <>
      <li>
        <link
          href="/docs/installation"
          className="hover:text-sky-500 dark:hover:text-sky-400"
        >
          Docs
        </link>
      </li>
      <li>
        <a
          href="https://tailwindui.com/?ref=top"
          className="hover:text-sky-500 dark:hover:text-sky-400"
        >
          Components
        </a>
      </li>
      <li>
        <link
          href="/blog"
          className="hover:text-sky-500 dark:hover:text-sky-400"
        >
          Blog
        </link>
      </li>
      <li>
        <link
          href="/showcase"
          className="hover:text-sky-500 dark:hover:text-sky-400"
        >
          Showcase
        </link>
      </li>
    </>
  );
}

export function Header() {}
