import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Pre fectching demo</h1>
      <Link href="/users">Users Page</Link>
    </>
  );
}
