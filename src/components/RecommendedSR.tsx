import { Table } from "reactstrap";

function RecommendedSR() {
  return (
    <>
      <p className="display-6 text-light">
        Рекомендуемая конфигурация для игры с частотой 60 кадров в секунду в большинстве ситуаций при высоких параметрах
        качества графики
      </p>
      <Table>
        <tbody className="text-light">
          <tr>
            <th scope="row">ОС</th>
            <td>64-разрядная Windows 10 с последним обновлением или 64-разрядная Windows 11 с последним обновлением</td>
          </tr>
          <tr>
            <th scope="row">Процессор</th>
            <td>Intel Core i5-6600K / Core i7-4770 или AMD Ryzen 5 1400</td>
          </tr>
          <tr>
            <th scope="row">Память</th>
            <td>12 ГБ оперативной памяти</td>
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
            <td>NVIDIA GeForce GTX 1060 или AMD Radeon RX 580</td>
          </tr>
          <tr>
            <th scope="row">ПАМЯТЬ ВИДЕОКАРТЫ</th>
            <td>4 ГБ</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default RecommendedSR;
