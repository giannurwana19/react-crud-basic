import { Container } from 'react-bootstrap';
import BaseForm from './components/BaseForm';
import BaseTable from './components/BaseTable';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <>
      <NavbarComp />
      <Container className="mt-4">
        <h2 className="mb-3">Data Makanan</h2>
        <BaseTable />
        <BaseForm />
      </Container>
    </>
  );
}

export default App;
