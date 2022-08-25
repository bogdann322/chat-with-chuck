import miniAvatar1 from '../../img/miniAvatar.png'
import miniAvatar2 from '../../img/miniAvatar1.png'
import miniAvatar3 from '../../img/miniAvatar2.png'
import miniAvatar4 from '../../img/miniAvatar3.png'
import avatar1 from '../../img/avatar.png'
import avatar2 from '../../img/avatar1.png'
import avatar3 from '../../img/avatar2.png'
import avatar4 from '../../img/avatar3.png'

const defaultState = {
	chatUsers: [
		{
			name: 'Alex',
			miniAvatar: miniAvatar1,
			avatar: avatar1,
			messages: [
				{
					message: 'Hello, dude',
					date: '3/01/22',
					time: '14:22',
					seconds:'16614365502',
					myMessage: false
					
				},
				{
					message: 'Hi, how are you?',
					date: '3/02/22',
					time: '14:36',
					seconds:'16614365503',
					myMessage: true
				},
				{
					message: 'Awsome, thanks',
					date: '3/11/22',
					time: '15:00',
					seconds:'166143655031',
					myMessage: false
				},
			],
			id: 1,
		},
		{
			name: 'John',
			miniAvatar: miniAvatar2,
			avatar: avatar2,
			messages: [
				{
					message: 'How do you do?',
					date: '1/09/21',
					time: '21:59',
					seconds:'1661436550',
					myMessage: false
				},
				{
					message: 'Welcome',
					date: '2/09/21',
					time: '22:10',
					seconds:'1661436551',
					myMessage: true
				},
				{
					message: 'Nice to meet you',
					date: '2/09/21',
					time: '22:40',
					seconds:'16614365512',
					myMessage: false
				},
			],
			id: 2,
		},
		{
			name: 'Ben',
			miniAvatar: miniAvatar3,
			avatar: avatar3,
			messages: [
				{
					message: 'Where you from',
					date: '3/11/19',
					time: '10:00',
					seconds:'16614365',
					myMessage: false
				},
				{
					message: 'From Ukraine, and you?',
					date: '3/11/19',
					time: '10:22',
					seconds:'166143651',
					myMessage: true
				},
				{
					message: 'Im from British',
					date: '3/11/19',
					time: '10:24',
					seconds:'1661436515',
					myMessage: false
				},
			],
			id: 3,
		},
		{
			name: 'David',
			miniAvatar: miniAvatar4,
			avatar: avatar4,
			messages: [
				{
					message: 'Hi, i have a good offer for you',
					date: '3/11/15',
					time: '8:33',
					seconds:'1661436',
					myMessage: false
				},
				{
					message: 'Hello, what offer',
					date: '3/11/15',
					time: '8:40',
					seconds:'16614361',
					myMessage: true
				},
				{
					message: 'I know how to make million BTC',
					date: '3/11/15',
					time: '9:58',
					seconds:'166143622',
					myMessage: false
				},
			],
			id: 4,
		},
	],
	selectedId: null,
	idForMessage: null,
	answer: '',
}

const SELECTED_ID = 'SELECTED_ID'
const ID_FOR_MESSAGE = 'ID_FOR_MESSAGE'
const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_ANSWER = 'SET_ANSWER'

let localState = {
	chatUsers: JSON.parse(localStorage.getItem('state'))
}

export const chatsReducer = (state = JSON.parse(localStorage.getItem('state')) ? localState : defaultState, action) => {
	switch (action.type) {
		case SELECTED_ID:
			return { ...state, selectedId: action.payload }
		case ID_FOR_MESSAGE:
			return { ...state, idForMessage: action.payload }
		case ADD_MESSAGE:
			const { chatUsers, idForMessage } = state
			return {
				...state,
				chatUsers: chatUsers.map((user) => {
					if (user.id === idForMessage)
						return { ...user, messages: [...user.messages, action.payload] }
					return user
				}),
			}
		case SET_ANSWER:
			return { ...state, answer: action.payload }
		
		default:
			return state
	}
}

export const selectIdAction = (payload) => ({ type: SELECTED_ID, payload })
export const idForMessageAction = (payload) => ({
	type: ID_FOR_MESSAGE,
	payload,
})
export const addNewMessageAction = (payload) => ({ type: ADD_MESSAGE, payload })
export const setAnswerAction = (payload) => ({ type: SET_ANSWER, payload })
