export function FormOne(params_from_parent_element) {
  const { func } = params_from_parent_element;
  return (
    <form>
      <label>
        Předměty{" "}
        <select onChange={(e) => func("subject", e.target.value)}>
          <option value="maths">Matematika</option>
          <option value="english">Angličtina</option>
        </select>
      </label>
      <label>
        Úroveň předmětu{" "}
        <select onChange={(e) => func("level", e.target.value)}>
          <option value="beginner">Začátečník</option>
          <option value="middle">Středně pokročilý</option>
          <option value="advanced">Velmi pokročilý</option>
        </select>
      </label>
      <label>
        Předpokládaná délka{" "}
        <select onChange={(e) => func("sessions", e.target.value)}>
          <option value="beginner">1 lekce</option>
          <option value="starter">2 - 4 lekce</option>
          <option value="middle">5 - 9 lekcí</option>
          <option value="advanced">10 a víc lekcí</option>
        </select>
      </label>
      <label>
        Popis látky k doučení:{" "}
        <textarea onChange={(e) => func("description", e.target.value)} />
      </label>
    </form>
  );
}
