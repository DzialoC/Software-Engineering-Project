import React, { Component } from 'react';

class Checklist extends Component {
  constructor() {
    super();
    this.state = {
      checklistItems: [],
      newItem: '',
      editingIndex: -1,
    };
  }

  handleNewItemChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  handleAddItem = () => {
    if (this.state.newItem.trim() !== '') {
      this.setState((prevState) => ({
        checklistItems: [...prevState.checklistItems, prevState.newItem],
        newItem: '',
      }));
    }
  };

  handleEditItem = (index) => {
    this.setState({
      editingIndex: index,
      newItem: this.state.checklistItems[index],
    });
  };

  handleSaveItem = () => {
    if (this.state.newItem.trim() !== '') {
      this.setState((prevState) => {
        const checklistItems = [...prevState.checklistItems];
        checklistItems[prevState.editingIndex] = prevState.newItem;
        return {
          checklistItems,
          newItem: '',
          editingIndex: -1,
        };
      });
    }
  };

  handleDeleteItem = (index) => {
    this.setState((prevState) => {
      const checklistItems = [...prevState.checklistItems];
      checklistItems.splice(index, 1);
      return {
        checklistItems,
        editingIndex: -1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Vehicle Inspection Checklist</h2>
        <ul>
          {this.state.checklistItems.map((item, index) => (
            <li key={index}>
              {this.state.editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={this.state.newItem}
                    onChange={this.handleNewItemChange}
                  />
                  <button onClick={this.handleSaveItem}>Save</button>
                </div>
              ) : (
                <div>
                  {item}
                  <button onClick={() => this.handleEditItem(index)}>Edit</button>
                  <button onClick={() => this.handleDeleteItem(index)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.handleNewItemChange}
          />
          {this.state.editingIndex === -1 ? (
            <button onClick={this.handleAddItem}>Add</button>
          ) : (
            <button onClick={this.handleSaveItem}>Save</button>
          )}
        </div>
      </div>
    );
  }
}

export default Checklist;