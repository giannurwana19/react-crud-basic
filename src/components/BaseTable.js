import { Table } from 'react-bootstrap';

function BaseTable(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
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
                <td>{food.id}</td>
                <td>{food.name}</td>
                <td>{food.description}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => props.editData(food.id)}>
                    Edit
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
