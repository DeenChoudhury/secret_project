export async function getTest(){
    const data = await fetch("/users").then(res => {
		return res.json();
	})
	return data;
};

export async function getTracker(){
	const data = await fetch("/tracker").then(res => {
		console.log(res);
		return res.json();
	})
	return data;
};

export async function getHabits(){
	const data = await fetch("/habits").then(res => {
		console.log(res);
		return res.json();
	})
	return data;
};

export async function getCompletions(){
	const data = await fetch("/completion").then(res => {
		console.log(res);
		return res.json();
	})
	return data;
};

export async function getHabitHistory(route){
	const data = await fetch(route).then(res => {
		console.log("getHabitHistoryRes", res);
		return res.json();
	})
	return data;
};

export async function postTracker(habit) {
	await fetch("/tracker", {
		method: 'POST',
  	headers: {
    'Content-Type': 'application/json',
  	},
  	body: JSON.stringify(habit),
	})
	.then(response => response.json())
	.then(data => {
		console.log('Success:', data);
	})
	.catch((error) => {
		console.error('Error:', error);
	})
};

export async function postHabitDays(args) {
	console.log('postHabitdays');
	await fetch("/habits", {
		method: 'POST',
  	headers: {
    'Content-Type': 'application/json',
  	},
  	body: JSON.stringify(args),
	})
	.then(response => response.json())
	.then(data => {
		console.log('Success:', data);
	})
	.catch((error) => {
		console.error('Error:', error);
	})
};
