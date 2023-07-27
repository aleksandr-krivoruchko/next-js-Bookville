import Link from "next/link";

export default function WorksLayout({ children }) {
  return (
    <div>
      <h3>You can see all my works</h3>
      <ul>
        <li>
          <Link href="/works/2021">Works 2021</Link>
        </li>
        <li>
          <Link href="/works/2022">Works 2022</Link>
        </li>
        <li>
          <Link href="/works/2023">Works 2023</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
