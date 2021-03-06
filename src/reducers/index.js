import { createReducer } from 'redux-act';
import { fetchSchemaAction, schemaFetchedAction } from '../actions/fetchSchema';
import { queryExecutedAction, clearQueryResultAction, queryErroredAction } from '../actions/executeQuery';

const initialState = {};

export const getSchema = (state) => state.graphql.schema
export const getQueryResult = (state) => state.graphql.queryResult
export const getQueryError = (state) => state.graphql.queryError

export const graphql = createReducer({
  [schemaFetchedAction]: (state, schema) => Object.assign(state, { schema }),
  [queryExecutedAction]: (state, queryResult) => {
    return Object.assign(state, { queryResult });
  },
  [queryErroredAction]: (state, queryError) => {
    console.log(queryError);
    return Object.assign(state, { queryError });
  },
  [clearQueryResultAction]: (state ) => {
    return Object.assign(state, { queryResult: null });
  }
}, initialState);
