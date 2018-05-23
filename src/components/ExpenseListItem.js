import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt, note }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>{numeral(amount / 100).format('$0,0.00')}</p>
            {note && <p>Note: {note}</p>}
            <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
        </div>
    )
};

export default (ExpenseListItem)