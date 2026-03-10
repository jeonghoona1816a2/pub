import React, { useState, useEffect, useMemo } from "react";
import styles from "./GeneratorAsyncAwait.module.scss";
import { AgGridReact } from "ag-grid-react";

// /** yield 표현식   */
// function* genDecFunc() {
//     yield 1;
// }
// const genExpfunc = function* () {
//     yield 1;
// }
// const obj = {
//     *genobjMethod() { yield 1; }
// }
// class MYClass {
//     *genClsMetod() {
//         yield 1;
//     }
// }
// // 제너레이터 함수는 화살표 함수로는 x
// // 제너레이터 함수는 new 연산자와 함게 생성자 함수로 호출 x
// console.log('제너레이터');

// function* genFunc() {
//     yield 1;
// }

// const generator = genFunc();

// console.log('generator 안에 반복문이 있냐 ?', Symbol.iterator in generator);
// console.log("next 라는 메소드가 있냐?", 'next' in generator);


// console.log('--')
// function* genFunc2() {
//     try {
//         yield 1;
//         yield 2;
//         yield 3;
//         yield 4;
//     }
//     catch (e) {
//         console.error(e)
//     }

// }
// const gennerator2 = genFunc2();
// console.log(gennerator2.next());
// console.log(gennerator2.next());
// console.log(gennerator2.throw('Error!'))
// console.log(gennerator2.next());
// console.log(gennerator2.return('end다'))



// function* genFunc3() {
//     const x = yield 1;
//     const y = yield (x + 10);
//     return (x + y);
// }
// const gennerator3 = genFunc3(0);
// let res = gennerator3.next();
// console.log(res);//1 yield 1에서 멈춤
// res = gennerator3.next(10);
// console.log(res);//20  yield (x+10); x는 10이였으므로 20
// res = gennerator3.next(20); //x+y 합쳐져서 30이됨
// console.log(res);//


// const fetch = require('node-fetch');
// const asyncRunner  = (generatorFunc) => {
//     const generator = generatorFunc();
//     const onResolved = arg => {
//         const result = generator.next(arg);
//         return result.done ? result.value : result.value.then(res => onResolved(res));
//     }
//     return onResolved;
// };

// (asyncRunner(function * getchTodo(){
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     const response = yield fetch(url);
//     const todo = yield response.json()
//     console.log(todo)
// })());

// const fetch = require('node-fetch'); 이젠 안씀 특히 react에서는 


async function foo() {
    const res = await Promise.all([
        new Promise(resove => { return (setTimeout(() => { resove(1), 3000 })) }),
        new Promise(resove => { return (setTimeout(() => { resove(2), 2000 })) }),
        new Promise(resove => { return (setTimeout(() => { resove(3), 1000 })) })
    ])
    console.log('Promise.all', res)
}
foo()

const foo1 = async () => {
        try {
            const wrongUrl = 'https://worng.url';
            const response = await fetch(wrongUrl);
            const data = await response.json();
            console.log(data);
        }
        catch (e) {
            console.error(e)
        };
    }
    foo1();

export default function GeneratorAsyncAwait() {

    // useEffect(() => {
    //     async function fetchTodo() {
    //         const url = 'https://jsonplaceholder.typicode.com/todos/1';
    //         const response = await fetch(url);
    //         const todo = await response.json();
    //         console.log(todo);
    //     }
    //     fetchTodo();
    // }, []);

    /** 46.6.1 async 함수 */

    async function foo(n) { return n; }
    foo(1).then(v => console.log('함수선언', v));

    const bar = async function (n) { return n; }
    bar(2).then(v => console.log('async 함수 표현식', v));

    const baz = async n => n;
    baz(3).then(v => console.log('화살표표현', v))

    const obj = {
        async foo(n) { return n; }
    }
    obj.foo(4).then(v => console.log('메서드표현', v));

    class MyClass {
        async bar(n) { return n; }
    }
    const myClass = new MyClass;
    myClass.bar(5).then(v => console.log('크래스 메스드표현', v));

    /**46.6.2 await 키워드 화살표 표현 */

    // const getGithubUserName = async id => {
    //     const res = await fetch(`https://api.github.com/users/${id}`);
    //     const { name } = await res.json();
    //     console.log(name);
    // }
    // getGithubUserName('ungmo2');
    console.log('abc');
    // async function foo() {
    //     const a = await new Promise(resolve => { return setTimeout(() => { resolve(1), 3000 }) })
    //     const b = await new Promise(resolve => { return setTimeout(() => { resolve(2), 2000 }) })
    //     const c = await new Promise(resolve => { return setTimeout(() => { resolve(3), 1000 }) })
    //     console.log([a, b, c])
    // }

    console.log('try,catch');


    
const foo2 = async () => {
        try {
            const wrongUrl = 'https://worng.url';
            const response = await fetch(wrongUrl);
            const data = await response.json()
            console.log(data);
        }
        catch (e) {
            console.error(e)
        };
    }
    foo2();


    // const [todo, setTodo] = useState([]);
    // const [apiloading, setApiloding] = useState(false);
    // const columnDefs = useMemo(() => [
    //     {
    //         headerName: "ID",
    //         field: "id",
    //         flex: 1,
    //     },
    //     {
    //         headerName: "제목",
    //         field: "title",
    //         flex: 3,
    //     },
    //     {
    //         headerName: "완료 여부",
    //         field: "completed",
    //         flex: 1,
    //     },
    // ], []);

    // async function fetchTodo() {
    //     try {
    //         console.log('start')
    //         setApiloding(true);
    //         const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //             throw new Error('API 요청 실패');
    //         }
    //         const data = await response.json();
    //         setTodo(data);

    //     }
    //     catch (err) { console.error(err) }
    //     finally {
    //         setApiloding(false)
    //     };
    // }

    // useEffect(() => {
    //     fetchTodo();
    // }, []);


    return (
        <div>GeneratorAsyncAwait
            <h2>todo데이터 test</h2>
            {/* <button onClick={fetchTodo}> 불러오기 </button> */}
            {/* {apiloading && <p>로딩중 </p>}
            {todo.map((todo => {
                return (
                    <div key={todo.id} className={styles.container}>
                        <div>1. {todo.id}</div>
                        <div>2. {todo.title}</div>
                        <div>3. {todo.completed.toString()}</div>
                        <div>4. {todo.completed ? '완료' : '미완료'}</div>
                    </div>
                )
            })
            )} */}
            {/* <div className="ag-theme-quartz" style={{ height: 300, width: "100%" }}>
                <AgGridReact
                    rowData={todo}
                    columnDefs={columnDefs}
                // gridOptions={gridOptions}
                // defaultColDef={defaultColDef}
                // animateRows={true}
                // suppressCellFocus={true}
                />
            </div> */}


        </div>
    );
}