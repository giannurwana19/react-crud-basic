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
          {props.foods.map(food => {
            return (
              <tr key={food.id}>
                <td>{food.id}</td>
                <td>{food.name}</td>
                <td>{food.description}</td>
                <td>{food.price}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default BaseTable;
