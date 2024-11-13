// // Topic of DOM
// console.dir(document.body)
// let headaing=document.getElementById("heading1");


// let heading=document.querySelector("heading2")
// console.dir(heading)

// let heading2= document.get



// const clickbtn = () =>{
//     let text = document.getElementById('heading1').innerHTML='Hello, Welcome to Js'
//     let text2 = document.querySelector('.heading2').innerHTML='Practice of JS'
//     let text3 = document.querySelector('.heading2').style.backgroundColor = 'red'
// }


// const clickbtn = () =>{
//     let input = document.getElementById('input')
//     if(input.value >= 18){
//         document.getElementById('welcome').innerHTML=('Your Welcome')
//     }else{
//         document.getElementById('welcome').innerHTML=('You are underage')
//     }
// }

const clickbtn = () => {
    let input = document.getElementById('input');
    let age = parseInt(input.value); 

    switch (true) {
        case (age >= 18):
            document.getElementById('welcome').innerHTML = 'You are Welcome';
            break;
            case (age <= 18):
                document.getElementById('welcome').innerHTML = 'Congratulations';
                break;

        default:
            document.getElementById('welcome').innerHTML = 'You are underage';
            break;
    }
}

