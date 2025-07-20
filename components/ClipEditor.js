import { useState } from 'react';

export default function ClipEditor() {
  const [clip, setClip] = useState(null);
  const [status, setStatus] = useState("Waiting for video...");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setClip(file);
    setStatus("Processing with AI...");

    // Simuler un traitement IA
    setTimeout(() => {
      setStatus("✅ Clip optimisé avec effets, rythme, export prêt !");
    }, 3000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input type="file" accept="video/*" onChange={handleUpload} />
      <p>{status}</p>
      {clip && <video src={URL.createObjectURL(clip)} controls width="300" />}
    </div>
  );
}
