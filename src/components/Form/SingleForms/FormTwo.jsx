export function FormTwo(params_from_parent_element) {
  const { func } = params_from_parent_element;
  return (
    <form>
      <label>
        Počet osob{" "}
        <select onChange={(e) => func("numberofstudents", e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 a více</option>
        </select>
      </label>
      <label>
        Online nebo osobně{" "}
        <select onChange={(e) => func("onlineorperson", e.target.value)}>
          <option value="online">Online</option>
          <option value="inPerson">Osobně</option>
        </select>
      </label>
      <label>
        Jste ochotni případně dojíždět?{" "}
        <select onChange={(e) => func("journey", e.target.value)}>
          <option value="yes">Ano</option>
          <option value="no">Ne</option>
        </select>
      </label>
      <label>
        Může být jazykem výuky slovenština?{" "}
        <select onChange={(e) => func("slovakianLanguage", e.target.value)}>
          <option value="yes">Ano</option>
          <option selected value="no">
            Ne
          </option>
        </select>
      </label>
      <label>
        Máte požadavek na pohlaví lektora?{" "}
        <select onChange={(e) => func("gender", e.target.value)}>
          <option value="man">Muž</option>
          <option value="woman">Žena</option>
        </select>
      </label>
      <label>
        Škola a ročník doučovaného:{" "}
        <textarea
          onChange={(e) => func("schoolandyear", e.target.value)}
        ></textarea>
      </label>
      <label>
        Kdy máte během týdne čas?{" "}
        <textarea
          onChange={(e) => func("timepossibilities", e.target.value)}
        ></textarea>
      </label>
      <label>
        Poznámka{" "}
        <textarea onChange={(e) => func("note", e.target.value)}></textarea>
      </label>
    </form>
  );
}
