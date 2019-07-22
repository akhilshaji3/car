
export const carList = () =>{
return fetch('https://enegotz.glitch.me/')
.then((result) => (result.json()))
.catch((e) => alert(e));
}