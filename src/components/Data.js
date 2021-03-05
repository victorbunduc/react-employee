export default function Data({employees}) {
  function getDate(date) {
  // format date to mm-dd-yyyy
  const splitDate = date.substr(0, 10).split("-")
  return splitDate[1]+"-"+ splitDate[2]+"-"+ splitDate[0]
  }
  return (
    <>
   
      {/* filling up the table rows with user info */}
      {employees.map((result) => (
        
        <tr key={result.login.uuid}>
          <td>
            <img src={result.picture.medium} alt={result.name.first} />
          </td>
          <td>
            {result.name.first} {result.name.last}
          </td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{getDate(result.dob.date)}</td>
        </tr>
      ))}
    </>
  );
}
