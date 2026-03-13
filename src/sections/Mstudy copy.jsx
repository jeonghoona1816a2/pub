import React, { useRef, useState } from "react";
// import GeneratorAsyncAwait from "./studys/GeneratorAsyncAwait";
// import Promisestudy from "./studys/Promisestudy";
// import Asyncbasic from "./studys/Asyncbasic";
// import Loopstatment from "./studys/Loopstatment";
// import Asyncawaittest from "./studys/Asyncawaittest";
import Tasks from "./studys/Tasks";
import { Button } from "antd"

export default function Mstudy() {

    return (
        <div>
            {/* <GeneratorAsyncAwait /> */}
            {/* <Promisestudy /> */}
            {/* <Asyncbasic /> */}
            {/* <Loopstatment /> */}
            {/* <Asyncawaittest /> */}
            <Tasks />
            <Button>가나다라</Button>
        </div>
    );
}