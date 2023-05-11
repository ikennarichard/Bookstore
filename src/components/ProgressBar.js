import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

const container = {
  display: 'flex',
  alignItems: 'center',
  gap: '1em',
};

export default function ProgressBar() {
  const [value] = useState(Math.floor(Math.random() * 99));
  return (
    <div style={container}>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar value={value} />
      </div>
      <div>
        <p style={{ fontSize: '2rem' }}>
          {value}
          %
        </p>
        <p style={{ fontSize: '0.88rem', color: '#a4a4a4' }}>Completed</p>
      </div>
    </div>
  );
}
