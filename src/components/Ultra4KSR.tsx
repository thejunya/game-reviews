import { Table } from "reactstrap";

function Ultra4KSR() {
  return (
    <>
      <p className="display-6 text-light">
        Ультраспецификации для запуска игры с высоким FPS в разрешении 4K для всех режимов
      </p>
      <Table>
        <tbody className="text-light">
          <tr>
            <th scope="row">ОС</th>
            <td>64-разрядная Windows 10 с последним обновлением или 64-разрядная Windows 11 с последним обновлением</td>
          </tr>
          <tr>
            <th scope="row">Процессор</th>
            <td>Intel Core i9-9900K или AMD Ryzen 9 3900X</td>
          </tr>
          <tr>
            <th scope="row">Память</th>
            <td>16 ГБ оперативной памяти</td>
          </tr>
          <tr>
            <th scope="row">ДИСКОВОЕ ПРОСТРАНСТВО</th>
            <td>72 ГБ при запуске</td>
          </tr>
          <tr>
            <th scope="row">КЭШ МАТЕРИАЛОВ В ФОРМАТЕ ВЫСОКОГО РАЗРЕШЕНИЯ</th>
            <td>До 64 ГБ</td>
          </tr>
          <tr>
            <th scope="row">ВИДЕОКАРТА</th>
            <td>NVIDIA GeForce RTX 3080 или AMD Radeon RX 6800 XT</td>
          </tr>
          <tr>
            <th scope="row">ПАМЯТЬ ВИДЕОКАРТЫ</th>
            <td>10 ГБ</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Ultra4KSR;
