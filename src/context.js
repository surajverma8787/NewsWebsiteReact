import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer';

let Api = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: 'html',
  nbPages: 0,
  pages: 0,
  hits: []
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);



  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {

      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const removePost = (ID) => {
    dispatch({
      type: "Remove_Post",
      payload: ID
    })
  }

  const searchPost = (query) => {
    dispatch(
      {
        type: "Search_Post",
        payload: query
      }
    )
  }

  const getNextPage = () => {
    dispatch({
      type: "Next_Page"
    })
  }

  const getPrevPage = () => {
    dispatch({
      type: "Prev_Page"
    })
  }

  useEffect(() => {
    fetchApiData(`${Api}query=${state.query}&page=${state.pages}`);
  }, [state.query, state.pages])

  return (
    <AppContext.Provider value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };
