
export default function loopstatment() {

    console.log('-for-');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    /** */
    for (let i = 0; i <= numbers.length; i++) {
        console.log(i);
    }

    console.log('-map-');
    const numshead = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numsbody = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const users = [
        { id: 4, name: "지수" },
        { id: 5, name: "현우" },
        { id: 6, name: "수진" },
        { id: 7, name: "태훈" },
        { id: 8, name: "은지" }
    ];


    return <div>
        <table>
            <thead>
                <tr>
                    {numshead.map((n) =>
                        <th key={n}>{n}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {numsbody.map((n) =>
                        <td key={n}>{n}</td>
                    )}
                </tr>
            </tbody>
        </table>
        <table>
            {users.map((users) => {
                return (
                    <tr>
                        <td key={users.id}>{users.id}</td>
                        <td>{users.name}</td>
                    </tr>

                )

            })
            }


        </table >


        Loopstatment

    </div >
}