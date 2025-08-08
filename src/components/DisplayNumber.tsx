import { useLocalStorage } from './UseLocalStorage';
import '../styles/DisplayNumber.css';

export function DisplayNumber() {
  const { number, updateNumber } = useLocalStorage();

  return (
    <div className="display">
      <h3>Locally Saved Number</h3>
      <h2>{number}</h2>
      <section className="display-buttons">
        <button onClick={() => updateNumber(number - 1)}>Decrement</button>
        <button onClick={() => updateNumber(number + 1)}>Increment</button>
      </section>
    </div>
  );
}