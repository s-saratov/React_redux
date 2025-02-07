import { createAppSlice } from "store/createAppSlice";
import { UserData, userSliceState } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";

const userInitialState: userSliceState = {
    users: []
}

export const userSlice = createAppSlice({
    name: 'USER',
    initialState: userInitialState,
    reducers: create => ({
        addUser: create.reducer((state: userSliceState, action: PayloadAction<UserData>) => {
            state.users=[...state.users, action.payload]
        })
    }),
    selectors: {
        state: (userSliceState) => state.users
    }
})

export const usersActions = userSlice.usersActions
export const usersSelectors = userSlice.usersSelectors