import React from 'react';
import { Filters } from '../../types/Filters';

type Props = {
  setFilter: (arg: string) => void;
  query: string;
  setQuery: (arg: string) => void;
};

export const TodoFilter: React.FC<Props> = ({
  setFilter,
  query,
  setQuery,
}) => {
  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value={Filters.all}>All</option>
            <option value={Filters.active}>Active</option>
            <option value={Filters.completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setQuery('')}
            >
              Clear
            </button>
          </span>
        )}
      </p>
    </form>
  );
};
