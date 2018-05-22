import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt, note }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>€{amount}</p>
            {note && <p>note: {note}</p>}
            <p>created at: {createdAt}</p>
        </div>
    )
};

export default (ExpenseListItem)