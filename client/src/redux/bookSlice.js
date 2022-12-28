import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
	name: 'book',
	initialState: {
		books: [],
		genre: '',
		isFetching: false,
		error: false,
	},
	reducers: {
		getBookStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		getBookSuccess: (state, action) => {
			state.isFetching = true
			state.books = action.payload
			state.error = false
		},
		getBookFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		deleteBookStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		deleteBookSuccess: (state, action) => {
			state.isFetching = false
			state.books.splice(
				state.books.findIndex((item) => item._id === action.payload),
				1
			)
			state.error = false
		},
		deleteBookFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		updateBookStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		updateBookSuccess: (state, action) => {
			state.isFetching = false
			state.books[
				state.books.findIndex((item) => item._id === action.payload.id)
			] = action.payload.book
			state.error = false
		},
		updateBookFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		addBookStart: (state) => {
			state.isFetching = true
			state.error = false
		},
		addBookSuccess: (state, action) => {
			state.isFetching = false
			state.books.push(action.payload)
			state.error = false
		},
		addBookFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		changeGenre: (state, action) => {
			state.genre = action.payload
		},
	},
})

export const {
	getBookStart,
	getBookSuccess,
	getBookFailure,
	deleteBookFailure,
	deleteBookSuccess,
	deleteBookStart,
	updateBookFailure,
	updateBookSuccess,
	updateBookStart,
	addBookFailure,
	addBookSuccess,
	addBookStart,
	changeGenre,
} = bookSlice.actions
export default bookSlice.reducer
