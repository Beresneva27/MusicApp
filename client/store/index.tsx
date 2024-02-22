import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {AnyAction, applyMiddleware, createStore} from "redux";
import {reducer, RootState} from "./reducers";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const MakeStore: MakeStore<RootState>
    = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<RootState>(MakeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>