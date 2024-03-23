import './TimeTable.css'

/**
 * TimeTable component displays the runtime of Krushkal's and Prim's algorithms in milliseconds.
 * @param {number} krushkalTime - Runtime of Krushkal's algorithm in milliseconds.
 * @param {number} primsTime - Runtime of Prim's algorithm in milliseconds.
 * @returns {JSX.Element} TimeTable component.
 */
const TimeTable = ({ krushkalTime, primsTime }) => {
    return (
        <div className="table-container">
            <table className="example-table">
                <thead>
                    <tr>
                        <th>Algorithm</th>
                        <th>Runtime(ms)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Krushkal's</td>
                        <td>{`${krushkalTime ?? "-"} ms`}</td>
                    </tr>
                    <tr>
                        <td>Prims's</td>
                        <td>{`${primsTime ?? "-"} ms`}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TimeTable;