export async function test(){
    await fetch("/rest").then(res=>{
		console.log(res);
	})

}