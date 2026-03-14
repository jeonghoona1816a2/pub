import React, { useRef, useState } from "react";
// import GeneratorAsyncAwait from "./studys/GeneratorAsyncAwait";
// import Promisestudy from "./studys/Promisestudy";
// import Asyncbasic from "./studys/Asyncbasic";
// import Loopstatment from "./studys/Loopstatment";
// import Asyncawaittest from "./studys/Asyncawaittest";
// import Mainlayout from "./src/layout";
import AppRouter from "./src/AppRouter";
import { BrowserRouter } from "react-router-dom";

export default function Mstudy() {

    return (
        <div>
            {/* <GeneratorAsyncAwait /> */}
            {/* <Promisestudy /> */}
            {/* <Asyncbasic /> */}
            {/* <Loopstatment /> */}
            {/* <Asyncawaittest /> */}
            <BrowserRouter basename={import.meta.env.BASE_URL}>
                <AppRouter />
            </BrowserRouter>

        </div>
    );
}
