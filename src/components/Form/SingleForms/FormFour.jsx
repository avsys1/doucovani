export function FormFour(params_from_parent_element) {
  const { func } = params_from_parent_element;
  return (
    <form>
      <label>
        Jméno doučovaného:{" "}
        <textarea onChange={(e) => func("nameoftutored", e.target.value)} />
      </label>
      <label>
        E-mail:{" "}
        <textarea onChange={(e) => func("emailoftutored", e.target.value)} />
      </label>
      <label>
        Telefon:{" "}
        <textarea onChange={(e) => func("telephone", e.target.value)} />
      </label>
    </form>
  );
}
