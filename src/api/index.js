export async function getTest(){
    const data = await fetch("/users").then(res => {
		return res.json();
	})
	return data;
};

export async function getHabits(){
	const data = await fetch("/habits").then(res => {
		return res.json();
	})
	return data;
};
