import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ToDoCard({ toDoObject }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{toDoObject.title}</h5>
          <p className="card-text">{toDoObject.description}</p>
          <Button className="btn btn-primary">thinking emoji!!!</Button>
        </div>
      </div>
    </div>
  );
}

ToDoCard.propTypes = {
  toDoObject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};
