import Head from 'next/head';
import ClipEditor from '../components/ClipEditor';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clipmaster T</title>
      </Head>
      <main>
        <h1>🎬 Clipmaster T</h1>
        <ClipEditor />
      </main>
    </div>
  );
}
