import axios from 'axios'
import {
	addBookFailure,
	addBookStart,
	addBookSuccess,
	deleteBookFailure,
	deleteBookStart,
	deleteBookSuccess,
	getBookFailure,
	getBookStart,
	getBookSuccess,
	updateBookFailure,
	updateBookStart,
	updateBookSuccess,
} from './bookSlice'
import {
	blockUserFailure,
	blockUserStart,
	blockUserSuccess,
	deleteUserFailure,
	deleteUserStart,
	deleteUserSuccess,
	getUserFailure,
	getUserStart,
	getUserSuccess,
	loginFailure,
	loginStart,
	loginSuccess,
	logout,
	registerFailure,
	registerStart,
	registerSuccess,
	updateUserFailure,
	updateUserStart,
	updateUserSuccess,
} from './userSlice'
import { toast } from 'react-toastify'

const BASE_URL = 'https://domishka.adaptable.app/'
// const BASE_URL = "http://localhost:3001/";

export const publicReq = axios.create({
	baseURL: BASE_URL,
})

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	const log = toast.loading('Пожалуйста подождите ...')
	try {
		const res = await publicReq.post('/auth/login', user)
		console.log(res.data)
		dispatch(loginSuccess(res.data))
		toast.update(log, {
			render: '',
			type: 'success',
			isLoading: false,
			autoClose: 500,
		})
	} catch (err) {
		dispatch(loginFailure())
		toast.update(log, {
			render: 'Неправильный пароль или адрес электронной почты',
			type: 'error',
			isLoading: false,
			autoClose: 2000,
		})
	}
}

export const register = async (dispatch, user) => {
	dispatch(registerStart())
	const reg = toast.loading('Пожалуйста подождите ...')
	try {
		const res = await publicReq.post('/auth/register', user)
		dispatch(registerSuccess(res.data))
		toast.update(reg, {
			render: '',
			type: 'success',
			isLoading: false,
			autoClose: 500,
		})
	} catch (err) {
		dispatch(registerFailure())
		toast.update(reg, {
			render: 'Что-то пошло не так...',
			type: 'error',
			isLoading: false,
			autoClose: 2000,
		})
	}
}

export const Logout = async (dispatch) => {
	dispatch(logout())
}

export const getUser = async (dispatch) => {
	dispatch(getUserStart())
	try {
		const res = await publicReq.get('/users', {
			headers: {
				Authorization: `Bearer ${
					JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
						?.currentUser?.accessToken
				}`,
			},
		})
		dispatch(getUserSuccess(res.data))
	} catch (err) {
		dispatch(getUserFailure())
		console.log(err)
	}
}

export const deleteUser = async (id, dispatch) => {
	dispatch(deleteUserStart())
	const del = toast.loading('Пожалуйста подождите...')

	try {
		await publicReq.delete(`/users/${id}`, {
			headers: {
				Authorization: `Bearer ${
					JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
						?.currentUser?.accessToken
				}`,
			},
		})
		dispatch(deleteUserSuccess(id))
		toast.update(del, {
			render: 'Пользователь успешно удален.',
			type: 'success',
			isLoading: false,
			autoClose: 500,
		})
	} catch (err) {
		dispatch(deleteUserFailure())
		toast.update(del, {
			render: 'Что-то пошло не так...',
			type: 'error',
			isLoading: false,
			autoClose: 2000,
		})
	}
}

export const getBooks = async (dispatch) => {
	dispatch(getBookStart())
	try {
		const res = await publicReq.get('/books')
		dispatch(getBookSuccess(res.data))
	} catch (err) {
		dispatch(getBookFailure())
	}
}

export const deleteBook = async (id, dispatch) => {
	dispatch(deleteBookStart())
	const delB = toast.loading('Пожалуйста подождите...')
	try {
		await publicReq.delete(`/books/${id}`, {
			headers: {
				Authorization: `Bearer ${
					JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
						?.currentUser?.accessToken
				}`,
			},
		})
		dispatch(deleteBookSuccess(id))
		toast.update(delB, {
			render: 'Книга успешно удалена.',
			type: 'success',
			isLoading: false,
			autoClose: 500,
		})
	} catch (err) {
		dispatch(deleteBookFailure())
		toast.update(delB, {
			render: 'Что-то пошло не так...',
			type: 'error',
			isLoading: false,
			autoClose: 2000,
		})
	}
}

export const addBook = async (book, dispatch) => {
	dispatch(addBookStart())
	const add = toast.loading('Пожалуйста подождите...')
	try {
		const res = await publicReq.post(`/books`, book, {
			headers: {
				Authorization: `Bearer ${
					JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
						?.currentUser?.accessToken
				}`,
			},
		})
		dispatch(addBookSuccess(res.data))
		toast.update(add, {
			render: 'Новая книга успешно добавлен.',
			type: 'success',
			isLoading: false,
			autoClose: 500,
		})
		window.location = `https://domishka.netlify.app/admin/book/${res.data._id}`
	} catch (err) {
		dispatch(addBookFailure())
		toast.update(add, {
			render: 'Что-то пошло не так...',
			type: 'error',
			isLoading: false,
			autoClose: 2000,
		})
	}
}

export const blockUser = async (id, blocked, dispatch) => {
	dispatch(blockUserStart())
	const block = toast.loading('Пожалуйста подождите...')
	try {
		const res = await publicReq.put(`/users/${id}`, blocked, {
			headers: {
				Authorization: `Bearer ${
					JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
						?.currentUser?.accessToken
				}`,
			},
		})
		dispatch(blockUserSuccess(res.data, id))
		if (res.data.isBlocked) {
			toast.update(block, {
				render: 'Пользователь заблокирван.',
				type: 'success',
				isLoading: false,
				autoClose: 500,
			})
		} else {
			toast.update(block, {
				render: 'Пользователь раблокирван.',
				type: 'success',
				isLoading: false,
				autoClose: 500,
			})
		}
	} catch (err) {
		dispatch(blockUserFailure())
		toast.update(block, {
			render: 'Что-то пошло не так...',
			type: 'error',
			isLoading: false,
			autoClose: 2000,
		})
	}
}

export const updateBook = async (book, id, dispatch) => {
	dispatch(updateBookStart())
	const upd = toast.loading('Пожалуйста подождите...')
	try {
		const res = await publicReq.put(`/books/${id}`, book, {
			headers: {
				Authorization: `Bearer ${
					JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
						?.currentUser?.accessToken
				}`,
			},
		})
		dispatch(updateBookSuccess(res.data._id, id))
		toast.update(upd, {
			render: 'Ваша книга успешно обновлена.',
			type: 'success',
			isLoading: false,
			autoClose: 500,
		})
	} catch (err) {
		dispatch(updateBookFailure())
		toast.update(upd, {
			render: 'Что-то пошло не так...',
			type: 'error',
			isLoading: false,
			autoClose: 2000,
		})
	}
}

export const updateUser = async (user, id, dispatch) => {
	dispatch(updateUserStart())
	const block = toast.loading('Пожалуйста подождите...')
	try {
		const res = await publicReq.put(`/users/${id}`, user)
		dispatch(updateUserSuccess(res.data))
		toast.update(block, {
			render: 'Ваши данные успешно обновлены',
			type: 'success',
			isLoading: false,
			autoClose: 500,
		})
	} catch (err) {
		dispatch(updateUserFailure())
		toast.update(block, {
			render: 'Что-то пошло не так...',
			type: 'error',
			isLoading: false,
			autoClose: 2000,
		})
	}
}
