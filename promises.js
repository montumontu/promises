// ------------------------------------
// SImple Promises 
//-------------------------------------

// console.log("hi Node");
// var function1 = function () {
//     return new Promise(
//         function (resolve, reject) {
//             if (false) {
//                 console.log("promises");
//                 resolve("nayan");
//             } else {
//                 reject("error");
//             }
//         }
//     ).catch(error => console.log(error));
// };
// function1();

// ---------------------------------------------------------
// Promise chaining catch statement written 
//----------------------------------------------------------
// var function2 =() => {
//     return new Promise(
//         function (resolve, reject) {
//             if (true) {
//                 console.log("promises");
//                 resolve("nayan");
//             } else reject("error from promises");
//         }
//     ).catch(error => console.log(error));
// };
// var promise = function2();
// promise.then((result) => {
//     return new Promise(
//         function (resolve, reject) {
//             if (result) console.log(result + "main result");
//             resolve("resolveddd");
//         }
//     ).then(result => console.log(result));
// }).catch(function errorhandling(error) {
//     console.log(error + " error");
// });

// ------------------------------------
// Promises with arrow function
//-------------------------------------

// var urName = () => {
//     return new Promise(
//          (resolve, reject) => {
//             if (true)  resolve("done");
//              else reject("not done");
//         }
//     ).then(result => console.log(result + "final")
//     ).catch(error => console.log(error + "error string")
//     );
// };
// urName();

// ------------------------------------
// Promises all
//-------------------------------------

// var manyPromises = Promise.all([ func1(), func2()]).then((result) => {
//     console.log(result[0]);
//     console.log(result[1]);
// });

// function func1() {
//     return new Promise( (res,rej) => { res("func1");});
// }

// function func2() {
//     return new Promise( (res,rej) => { res("func2");});
// }

// ------------------------------------
// Promises Race
//-------------------------------------

// var promiseRace = Promise.race([func1(),func2()]).then((result) => { console.log(result);});

// function func1() {
//     return new Promise (
//         (res,rej) => {
//             setTimeout( () => { 
//                 console.log('func1q');
//                 res("func1");
//             }, 100);
//         }
//     );
// }

// function func2() {
//     return new Promise ((res,rej) => {
//         setTimeout(() => {
//             console.log("func2q");
//             res("func2");
//         },15);
//     });
// }

// ------------------------------------
// CallBack hell
//-------------------------------------

// var func3 =function(func4){
//     console.log("fucn3");
//     func4(()=>console.log("func5"));
// };
// var func = function (x, call) {
//     console.log("function 1");
//     call(function()
//         {
//             console.log("fucn2");
//             func3((func5)=>{
//                 console.log("func4");
//                 func5();
//             });
//         }
//     );
// };

// func(x=12, function (callb) {
//     console.log("callback function");
//     callb();
// });

// ------------------------------------
// Async Await
//-------------------------------------

async function f() {
    let servercalling = new Promise( (resolve,reject) =>{
        setTimeout(()=>{
            console.log("settimeout function");
            resolve("resolved value");
        },10);
    }).catch(error => {
        console.log("reject"+error);
    });
    
    let servercall = await servercalling;
    console.log("server caling");
    return Promise.resolve(servercall);
  }
  
  f().then(result=>console.log(result)); // 1