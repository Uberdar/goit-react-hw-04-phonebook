export default function HooksTodoRender({ deleteSpecific, datafromdataBase }) {
  const deleteSpecificTodo = e => {
    deleteSpecific(e.currentTarget.id);
  };
  const rendernewElem = () => {
    return datafromdataBase.map(elem => {
      return (
        <div key={elem.id}>
          <span>name: {elem.name} </span>
          <span>number: {elem.number} </span>
          <button type="button" id={elem.id} onClick={deleteSpecificTodo}>
            Delete
          </button>
        </div>
      );
    });
  };
  return (
    <>
      <h2>Contacts</h2>
      {rendernewElem()}
    </>
  );
}
