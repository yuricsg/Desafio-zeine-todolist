const Filter = ({ filter, setFilter }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Concluídas</option>
                    <option value="Incompleted">Pendentes</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
