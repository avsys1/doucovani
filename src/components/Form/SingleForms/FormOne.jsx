export function FormOne() {
  return (
    <form>
      <label>
        Předměty{" "}
        <select>
          <option value="maths">Matematika</option>
          <option value="english">Angličtina</option>
        </select>
      </label>
      <label>
        Úroveň předmětu{" "}
        <select>
          <option value="beginner">Začátečník</option>
          <option value="middle">Středně pokročilý</option>
          <option value="advanced">Velmi pokročilý</option>
        </select>
      </label>
      <label>
        Předpokládaná délka{" "}
        <select>
          <option value="beginner">1 lekce</option>
          <option value="middle">2 - 4 lekce</option>
          <option value="advanced">5 - 9 lekcí</option>
          <option value="advanced">10 a víc lekcí</option>
        </select>
      </label>
      <label>
        Popis látky k doučení: <textarea />
      </label>
    </form>
  );
}
