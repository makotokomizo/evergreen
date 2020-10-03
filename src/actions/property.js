import axios from 'axios';
// import { createMessage, returnErrors } from './messages';
// import { tokenConfig } from './auth';

import { GET_LEADS, GET_LEAD, DELETE_LEAD, ADD_LEAD } from './types';

// GET LEADS
export const getProperty = () => (dispatch, getState) => {
  axios
  .get('http://127.0.0.1:8000/property/api/list')
//   .get('/api/list/', tokenConfig(getState))
  .then((res) => {
    console.log("action getProperty res.data", res.data)
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    // .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
    .catch((err) => console.log("actions property get", err) );
};

// GET LEAD
export const get1Property = (num) => (dispatch, getState) => {
    axios
    .get(`http://127.0.0.1:8000/property/api/list/${num}`)
  //   .get('/api/list/', tokenConfig(getState))
    .then((res) => {
      console.log("action get1Property res.data", typeof res.data.sharableItems)

        dispatch({
          type: GET_LEAD,
          payload: res.data,
        });
      })
      // .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
      .catch((err) => console.log("actions property get", err) );
  };

// DELETE LEAD
// export const deleteLead = (id) => (dispatch, getState) => {
//   axios
//     .delete(`/api/leads/${id}/`, tokenConfig(getState))
//     .then((res) => {
//       dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
//       dispatch({
//         type: DELETE_LEAD,
//         payload: id,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// // ADD LEAD
// export const addLead = (lead) => (dispatch, getState) => {
//   axios
//     .post('/api/leads/', lead, tokenConfig(getState))
//     .then((res) => {
//       dispatch(createMessage({ addLead: 'Lead Added' }));
//       dispatch({
//         type: ADD_LEAD,
//         payload: res.data,
//       });
//     })
//     .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
// };