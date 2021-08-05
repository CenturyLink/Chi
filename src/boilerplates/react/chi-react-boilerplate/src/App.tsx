import React from 'react';
import './App.css';
import Header from './components/header';

declare const chi: any;

class App extends React.Component {
  componentDidMount() {
    chi.modal(document.getElementById('modal-trigger-1'));
  }

  render() {
    return (
      <div className="hello -h--100">
        <Header />
        <div
          className="-d--flex -w--100 -h--100 -align-items--center -justify-content--center"
        >
          <button
            id="modal-trigger-1"
            className="chi-button chi-modal__trigger"
            data-target="#modal-1"
          >
            Launch demo modal
            </button>

          <div className="chi-backdrop -closed">
            <div className="chi-backdrop__wrapper">
              <section
                id="modal-1"
                className="chi-modal"
                role="dialog"
                aria-label="Modal description"
                aria-modal="true"
              >
                <header className="chi-modal__header">
                  <h2 className="chi-modal__title">Modal Title</h2>
                  <button
                    className="chi-button -icon -close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <div className="chi-button__content">
                      <i className="chi-icon icon-x" aria-hidden="true"></i>
                    </div>
                  </button>
                </header>
                <div className="chi-modal__content">
                  <p className="-text -m--0">Modal content</p>
                </div>
                <footer className="chi-modal__footer">
                  <button className="chi-button" data-dismiss="modal">Cancel</button>
                  <button className="chi-button -primary">Save</button>
                </footer>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
