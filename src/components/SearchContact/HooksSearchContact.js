export default function HooksSearchContact({
  parseValueToSearchContact,
  searchValueParse,
}) {
  return (
    <input
      value={parseValueToSearchContact}
      className="search_input"
      onChange={searchValueParse}
    ></input>
  );
}
