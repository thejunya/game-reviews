import { Table } from "reactstrap";

function MinimumSR() {
  return (
    <>
      <p className="display-6 text-light">Технические характеристики, необходимые для одиночной игры</p>
      <Table>
        <tbody className="text-light">
          <tr>
            <th scope="row">ОС</th>
            <td>64-разрядная Windows 10 с последним обновлением</td>
          </tr>
          <tr>
            <th scope="row">Процессор</th>
            <td>Intel Core i3-6100 / Core i5-2500K или AMD Ryzen 3 1200</td>
          </tr>
          <tr>
            <th scope="row">Память</th>
            <td>8 ГБ оперативной памяти</td>
          </tr>
          <tr>
            <th scope="row">ДИСКОВОЕ ПРОСТРАНСТВО</th>
            <td>72 ГБ при запуске</td>
          </tr>
          <tr>
            <th scope="row">КЭШ МАТЕРИАЛОВ В ФОРМАТЕ ВЫСОКОГО РАЗРЕШЕНИЯ</th>
            <td>До 32 ГБ</td>
          </tr>
          <tr>
            <th scope="row">ВИДЕОКАРТА</th>
            <td>NVIDIA GeForce GTX 960 или AMD Radeon RX 470</td>
          </tr>
          <tr>
            <th scope="row">ПАМЯТЬ ВИДЕОКАРТЫ</th>
            <td>2 ГБ</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default MinimumSR;
