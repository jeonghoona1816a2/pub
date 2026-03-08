import React, { useRef, useState } from "react";

function* genDecFunc() {
    yield 1;
}

const genExpFunc = function* () {
    yield 1;
}

const obj = {
    *genobjMethod() { yield 1; }
}


class MYClass {
    * genClsMethod() { yield 1; }

}

/**
 * 제너레이터 함수는 화살표 함수로 정의할 수 없다.
 * const genArrowFunc = *() = >{yield 1;} 
 * SyntaxError : Unexpected token '*'
 * 
 * 
 */
console.log('genFunc');
function* genFunc() {
    try {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
    catch (e) {
        console.log(e);
    }
}

const generator = genFunc();
console.log(generator.next());
console.log(generator.return('종료!'));
console.log('genFunc2');
/**
 * 이터레이터는 next(), return(), throw() 메서드를 가지고 있다.
 * next()는 다음 값을 반환하고, return()은 제너레이터를 종료
*/

function* genFunc2() {
    try {
        yield 1;
        yield 2;
        yield 3;
    }
    catch (e) { console.log(e); }
}
const generator2 = genFunc2();
console.log(generator2.next());
console.log(generator2.throw('에러 발생!!'));




console.log('genFunc3');
function* genFunc3() {
    const x = yield 1;
    const y = yield (x + 10);
    return (x + y);
}

const generator3 = genFunc3();
let res = generator3.next();
console.log(res);
/**1 */
res = generator3.next(10);
console.log(res);

res = generator3.next(20);
console.log(res);


/**첫번째 x는..
 * 두번째 10이고
 *  3번째 y는 20 끈내고 내려갔을때 
 *  x + y 내보내 30 10 +  20 은 30
 */

console.log('infinitefibonacci');

const infiniteFibonacci = (function () {
    let [pre, cur] = [0, 1];
    return {
        [Symbol.iterator]() { return this; },
        next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur }
        }
    };
}()
)
for (const num of infiniteFibonacci) {
    if (num > 10000) break;
    console.log(num);
}

console.log('infinitefibonacci2');

const infiniteFibonacci2 = (
    function* () {
        let [pre, cur] = [0, 1];
        while (true) {
            yield cur;
            [pre, cur] = [cur, pre + cur];
        }
    }());

for (const num of infiniteFibonacci2) {
    if (num > 10000) break;
    console.log(num);
}


export default function GeneratorAsyncAwait() {

    return (
        <div>GeneratorAsyncAwait
        </div>
    );
}