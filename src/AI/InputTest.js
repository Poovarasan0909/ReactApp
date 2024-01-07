import testInput from './testInput.txt';
import codeInputs from './codeInput.txt';
import storeInput from './StoreInput.txt';


export async function inputTest() {
    let text = "";
    const response = await fetch(testInput).then(r =>text =  r.text())
    return response;
}


export async function codeInput() {
    let text = "";
    const response = await fetch(codeInputs).then(r =>text =  r.text())
    return response;
}

export async function StoreInput() {
    let text = "";
    const response = await fetch(storeInput).then(r =>text =  r.text())
    return response;
}