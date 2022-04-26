import React from 'react';
class TodosRenderClass extends React.Component {
  deleteSpecificTodo = e => {
    let x = e.currentTarget.id;
    // console.log('x: ', x);
    this.props.deleteSpecific(x);
  };
  rendernewElem = () => {
    return this.props.datafromdataBase.map(elem => {
      return (
        <div key={elem.id}>
          <span>name: {elem.name} </span>
          <span>number: {elem.number} </span>
          <button type="button" id={elem.id} onClick={this.deleteSpecificTodo}>
            Delete
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <h2>Contacts</h2>
        {this.rendernewElem()}
      </>
    );
  }
}

export default TodosRenderClass;
