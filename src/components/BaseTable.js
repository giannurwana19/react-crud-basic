import { Table } from 'react-bootstrap';

function BaseTable(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nama Makanan</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {props.foods.map((food, index) => {
            return (
              <tr key={index + 1}>
                <td>{food.name}</td>
                <td>{food.description}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => props.editData(food.id)}>
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ml-1 btn-sm"
                    onClick={() => props.delete(food.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default BaseTable;
