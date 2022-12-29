import { Table } from "reactstrap";

function CompetitiveSR() {
  return (
    <>
      <p className="display-6 text-light">
        Конкурентные спецификации для работы с высоким FPS для использования с монитором с высокой частотой обновления
      </p>
      <Table>
        <tbody className="text-light">
          <tr>
            <th scope="row">ОС</th>
            <td>64-разрядная Windows 10 с последним обновлением или 64-разрядная Windows 11 с последним обновлением</td>
          </tr>
          <tr>
            <th scope="row">Процессор</th>
            <td>Intel Core i7-4770K или AMD Ryzen 7 1800X</td>
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
            <td>До 32 ГБ</td>
          </tr>
          <tr>
            <th scope="row">ВИДЕОКАРТА</th>
            <td>NVIDIA GeForce RTX 3060Ti илиAMD Radeon RX 5700XT</td>
          </tr>
          <tr>
            <th scope="row">ПАМЯТЬ ВИДЕОКАРТЫ</th>
            <td>8 ГБ</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CompetitiveSR;
