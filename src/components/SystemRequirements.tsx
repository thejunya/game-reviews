import { Table } from "reactstrap";

export function Minimum() {
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

export function Recommended() {
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

export function Competitive() {
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

export function Ultra4K() {
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
