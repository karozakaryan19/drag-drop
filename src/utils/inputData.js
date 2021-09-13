import inputValidation from './inputValidation';

const { email, password, username, confirmPassword } = inputValidation;

const inputData = [
	{
		type: 'text',
		name: 'username',
		lableText: 'Полное имя',
		validation: username,
		placeholder: 'Введите полное имя',
	},
	{
		type: 'text',
		name: 'email',
		lableText: 'Адрес электронной почты',
		validation: email,
		placeholder: 'Введите адрес эл. почты',
	},
	{
		type: 'password',
		name: 'password',
		lableText: 'Пароль',
		validation: password,
		placeholder: 'Введите пароль',
	},
	{
		type: 'password',
		name: 'confirmPassword',
		lableText: 'Подтвердите пароль',
		validation: (passwordRef) => confirmPassword(passwordRef),
		placeholder: 'Подтвердите ваш пароль',
	},
];

export default inputData;
