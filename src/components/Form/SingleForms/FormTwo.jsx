export function FormTwo() {
  return (
    <form>
      <label>
        Počet osob{" "}
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 a více</option>
        </select>
      </label>
      <label>
        Online nebo osobně{" "}
        <select>
          <option value="online">Online</option>
          <option value="osobně">Osobně</option>
        </select>
      </label>
      <label>
        Jste ochotni případně dojíždět?{" "}
        <select>
          <option value="ano">Ano</option>
          <option value="ne">Ne</option>
        </select>
      </label>
      <label>
        Může být jazykem výuky slovenština?{" "}
        <select>
          <option value="ano">Ano</option>
          <option value="ne">Ne</option>
        </select>
      </label>
      <label>
        Máte požadavek na pohlaví lektora?{" "}
        <select>
          <option value="Muž">Muž</option>
          <option value="Žena">Žena</option>
        </select>
      </label>
      <label>
        Škola a ročník doučovaného: <textarea />
      </label>
      <label>
        Kdy máte během týdne čas? <textarea />
      </label>
      <label>
        Poznámka <textarea />
      </label>
    </form>
  );
}
