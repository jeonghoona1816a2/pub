import { useEffect } from 'react';

// const promiseGeT = url => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send();
//         xhr.onload = () => {
//             if (xhr.status === 200) {
//                 resolve(JSON.parse(xhr.response));
//             }
//             else {
//                 reject(new Error(xhr.status));
//             }
//         };
//     });
// };

// console.log('promise_resolve');
// const fulfilled = new Promise(resolve => resolve(1))
// fulfilled.then(value => console.log(value));
// console.log('promise_rejected');
// const rejected = new Promise((_, reject) => reject(new Error('error occurred')))
// rejected.catch(value => console.log(value))

export default function Promisestudy() {
    console.log('promise-study');
    /**
     * 자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용한다.
     * 하지만 전통적인 콜백 패턴은 콜백 헬로 인해 가독성이 나쁘고 비동기 처리 중 발생한 에러의
     * 처리가 곤란하여  여러 개의 비동기 처리를 한번에 처리하는 데도 한계가 있다.
     * Es6에서 비동기 처리를 위한 또 다른 패턴으로 프로미스 (Promise)를 도입했다. 프로미스는 전통적인 콜백
     * 패텅이 가진 단점을 보완하며 비동기 처리 시점을 명확하게 표현할 수 있다는 장정이 있다 
     * XMLHttpRequest 객체
     *메서드 (실행하는 것)
     *open(method, url) 
     *→ 어떤 방식(GET/POST)으로 어떤 주소에 요청할지 설정 (아직 보내지 않음)
 
     *send(body?) 
     *→ 실제로 서버에 요청을 보냄
 
     *abort() 
     *→ 진행 중인 요청을 취소
     *
     *✅ 프로퍼티 (값 또는 함수 저장 자리)
     *status
     *→ HTTP 상태 코드 (200, 404 등)
 
     *statusText
     *→ 상태 메시지 ("OK", "Not Found" 등)
 
     *response
     *→ 서버가 보낸 응답 데이터
 
     *readyState
     *→ 요청 진행 상태 (0~4 단계)
 
     *onload
     *→ 응답이 완료되었을 때 실행할 함수 등록
     */
    // console.log('promise');
    // const get = url => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', url);
    //     xhr.send();
    //     xhr.onload = () => {
    //         if (xhr.status === 200) {
    //             //서버 응담을 콘솔에 출력한다.
    //             console.log(JSON.parse(xhr.response));
    //         } else {
    //             console.error(`${xhr.status} ${xhr.stausText}`);
    //         }
    //     }
    // }
    // get('https://jsonplaceholder.typicode.com/posts/1');

    /**아래의 xhr.onload의 return은 get을 멈추게 하여 console.log에 undefined를 출력한다. */
    // console.log('promise');
    // const get = url => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', url);
    //     xhr.send();
    //     xhr.onload = () => {
    //         if (xhr.status === 200) {
    //             return JSON.parse(xhr.response);
    //         }
    //         console.error(`상태 : ${xhr.status}, 애러이유 : ${xhr.statusText}`);

    //     }
    // };
    // const response = get('https://jsonplaceholder.typicode.com/posts/1');
    // console.log(response)

    // console.log('promise');
    // const get = (url, successCallback, errorCallback) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', url);
    //     xhr.send();
    //     xhr.onload = () => {
    //         if (xhr.status === 200) {
    //             successCallback(JSON.parse(xhr.response));
    //         } 
    //         else{
    //             errorCallback(xhr.status)
    //         }
    //     }
    // }
    // get('https://jsonplaceholder.typicode.com/posts/1', console.log,console.error);


    // const get = (url, cb) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', url);
    //     xhr.send()
    //     xhr.onload = () => {
    //         if (xhr.status === 200) {
    //             cb(JSON.parse(xhr.response));

    //         } else {
    //             console.error(`${xhr.status} ${xhr.statusText}`)
    //         }
    //     }
    // }
    // const url = 'https://jsonplaceholder.typicode.com'

    // get(`${url}/posts/1`, ({ userId }) => {
    //     console.log(userId);
    //     get(`${url}/users/${userId}`, (userInfor) => { console.log(userInfor) });
    // });

    // // get(`${url}/posts/1`, console.log);
    // // get(`${url}/users/1`,console.log);

    // // 에러처리의 한계
    // /** 비동기 처리를 위한 콜백 패턴의 문제점 중에서 가장 
    //  * 심각한 것은 에러처리가 곤란하다는 것이다. 다음 예제를 살펴보자  */
    // try {
    //     setTimeout(() => { throw new Error('Error!'); }, 1000);
    // }
    // catch (e) {
    //     console.error(`캐치한에러`, e)
    // }

    // const testurl = 'https://jsonplaceholder.typicode.com'
    // useEffect(() => {
    //     promiseGeT(`${testurl}/posts/1`)
    //         .then(data => console.log('data:', data))
    //         .catch(err => console.error('err:', err));

    // }, []);
    // const promiseGET = url => {

    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open('GET', url);
    //         xhr.send();

    //         xhr.onload = () => {
    //             if (xhr.status === 200) {
    //                 resolve(JSON.parse(xhr.response));
    //             }
    //             else {
    //                 reject(new Error)
    //             }
    //         }

    //     })
    // };
    // promiseGET('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(res => console.log(res))
    //     .catch(ero => console.error(ero))
    //     .finally(() => console.log('bye'))

    //     then(success, error)
    // → 첫 reject만 처리

    // .catch(error)
    // → Promise 체인의 모든 에러 처리

    const wrongUrl = 'https://jsonplaceholder.typicode.com/xxx/1';
    const realUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    // promiseGET(wrongUrl)
    //     .then(res => console.log(res), ero => console.error(ero))

    // promiseGET(wrongUrl)
    //     .then(res => console.log(res))
    //     .catch(ero => console.error(ero))

    /**.catch()가 더 “우수”하다는 걸 콘솔로 확인하는 방법 (확실한 실험) */

    // promiseGET(realUrl)
    //     .then(res => {
    //         console.log('성공1')
    //         throw new Error('then 내부에서 터임1-1');
    //     },
    //         er => console.error('then 두번째 인자에서 잡음1-2', err)
    //     )

    // promiseGET(realUrl)
    //     .then(res => {
    //         console.log('성공임2', res);
    //         throw new Error('내부에서 터짐2-1')
    //     })
    //     .catch(er => console.error('catch가 잡음2-2', er));

    console.log('promise-study - 프로미스 체이닝');

    // const idUrl = 'https://jsonplaceholder.typicode.com';

    // promiseGET(`${idUrl}/posts/1`)
    //     .then(({ userId }) => { return (promiseGET(`${idUrl}/users/${userId}`)) })
    //     // .then( userInfor => {
    //     //     return(console.log(JSON.parse(userInfor))))
    //     // }
    //     .then(userInfor => console.log(userInfor))
    //     .catch(er => console.log(er));
    // //체이닝 끝
    console.log('promise-study - resolve,reject,all');

    const promiseGET = url => {
        return (
            new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url)
                xhr.send()
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else { xhr.reject(new Error(xhr.status)) }
                }
            })
        )
    }
    const githubIds = ['Bret', 'Samantha', 'Karianne', 'Antonette'];
    Promise.all(githubIds.map(id => promiseGET(`http://api.github.com/users/${id}`)))
        .then(users => users.map(user => user.name))
        .then(console.log)
        .catch(console.error)

    return (
        <div>Promise
        </div>
    );
};