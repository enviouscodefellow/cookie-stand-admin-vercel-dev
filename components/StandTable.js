import CookieStandRow from './StandRow';

export default function CookieStandTable({ stands, deleteStand, info }) {
  const tableHeaders = [
    'Location',
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    'Totals',
  ];

  if (true) {
    return stands.length > 0 ? (
      <table className="w-5/6 mx-auto my-4">
        <thead>
          <tr>
            {tableHeaders.map((item, idx) => (
              <th className="bg-emerald-500 border border-emerald-700 w-128 text-left" key={idx}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stands.map((stand, idx) => (
            <CookieStandRow
              key={stand.id}
              info={stand}
              deleteStand={deleteStand}
              index={idx}
            />
          ))}
        </tbody>
        <tfoot className="bg-emerald-500 border border-emerald-700">
          <tr>
            <td>Totals</td>
            {tableHeaders.slice(1, -1).map((header, idx) => {
              let sum = 0;
              stands.forEach((stand) => {
                sum += stand.hourly_sales[idx];
              });
              return (
                <td key={idx} className="text-right">
                  {sum}
                </td>
              );
            })}
            <td className="text-right">
              {stands.reduce((acc, stand) => {
                return acc + stand.hourly_sales.reduce((num, sum) => num + sum, 0);
              }, 0)}
            </td>
          </tr>
        </tfoot>

      </table>
    ) : (
      <p className="w-8/12 p-2 mx-auto my-4 text-center text-lg">
        No Cookie Stands Available
      </p>
    );
  }
}
