import './TimeTable.css'

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