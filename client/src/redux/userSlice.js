import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentUser: null,
	users: [],
	isFetching: false,
	error: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginStart: state => {
			state.isFetching = true
			state.error = false
		},
		loginSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		loginFailure: state => {
			state.isFetching = false
			state.error = true
		},
		registerStart: state => {
			state.isFetching = true
			state.error = false
		},
		registerSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		registerFailure: state => {
			state.isFetching = false
			state.error = true
		},
		logout: state => {
			state.currentUser = null
		},
		getUserStart: state => {
			state.isFetching = true
			state.error = false
		},
		getUserSuccess: (state, action) => {
			state.isFetching = false
			state.users = action.payload
			state.error = false
		},
		getUserFailure: state => {
			state.isFetching = false
			state.error = true
		},
		deleteUserStart: state => {
			state.isFetching = true
			state.error = false
		},
		deleteUserSuccess: (state, action) => {
			state.isFetching = false
			state.users.splice(
				state.users.findIndex(item => item._id === action.payload),
				1
			)
			state.error = false
		},
		deleteUserFailure: state => {
			state.isFetching = false
			state.error = true
		},
		blockUserStart: state => {
			state.isFetching = true
			state.error = false
		},
		blockUserSuccess: (state, action) => {
			state.isFetching = false
			state.users[
				state.users.findIndex(item => item._id === action.payload.id)
			] = action.payload.users
			state.error = false
		},
		blockUserFailure: state => {
			state.isFetching = false
			state.error = true
		},
		updateUserStart: state => {
			state.isFetching = true
			state.error = false
		},
		updateUserSuccess: (state, action) => {
			state.isFetching = false
			console.log(action.payload)
			state.currentUser = action.payload
			state.error = false
		},
		updateUserFailure: state => {
			state.isFetching = false
			state.error = true
		},
	},
})

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	logout,
	registerStart,
	registerSuccess,
	registerFailure,
	getUserStart,
	getUserSuccess,
	getUserFailure,
	deleteUserStart,
	deleteUserSuccess,
	deleteUserFailure,
	blockUserStart,
	blockUserSuccess,
	blockUserFailure,
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
} = userSlice.actions

export default userSlice.reducer
