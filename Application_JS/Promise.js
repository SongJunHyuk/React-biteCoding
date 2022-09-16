function taskA(a, b) {
    return new Promise((resolve, rejct) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    })
}

function taskB(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    })
}

function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            cb(res);
        }, 2000);
    })
}

taskA(5, 1)
    .then((a_res) => {
        console.log("A RESULT : ", a_res);
        return taskB(a_res);
    })
    .then((b_res) => {
        console.log("B RESULT : ", b_res);
        return taskB(b_res);
    })
    .then((c_res) => {
        console.log("C RESULT : ", c_res);
    });

// taskA(3, 4, (a_res) => {
//     console.log("task A : ", a_res);
//     taskB(a_res, (b_res) => {
//         console.log("task B : ", b_res);
//         taskC(b_res, (c_res) => {
//             console.log("task C : ", c_res);
//         })
//     });
// })



// function isPositive(number) {
//     setTimeout(() => {
//         if(typeof number === 'number') {
//             // 성공 -> resolve
//             resolve(number >= 0 ? "양수":"음수");
//         } else {
//             // 실패 -> reject
//             reject("주어진 값이 숫자형 값이 아닙니다.");
//         }
//     },2000 );
// }

// function isPositiveP(number) {
//     const executor = (resolve, reject) => { //실행자
//         setTimeout(() => {
//             if(typeof number === 'number') {
//                 // 성공 -> resolve
//                 console.log(number);
//                 resolve(number >= 0 ? "양수":"음수");
//             } else {
//                 // 실패 -> reject
//                 reject("주어진 값이 숫자형 값이 아닙니다.");
//             }
//         }, 2000);
//     }

//     const asyncTask = new Promise(executor);
//     return asyncTask;
// }

// const res = isPositiveP(101);

// res.then((res) => {console.log("작업 성공 : ", res)}).catch((err) => {console.log("작업 실패 : ",err)});

// // isPositive(10,
// //     (res) => {
// //     console.log("성공적으로 수행됨 : ", res);
// //     },
// //     (err) => {
// //         console.log("실패 하였음 : ", err);
// //     }
// // );