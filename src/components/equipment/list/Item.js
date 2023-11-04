function Item(props) {
  const {
    id,
    level,
    type,
    name,
    yearNumber,
    yearMake,
    nameType,
    date,
    location,
    state,
    note,
  } = props.data;

  return (
    <tr className="table-item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{nameType}</td>
      <td>{yearMake}</td>
      <td>{yearNumber}</td>
      <td>{level}</td>
      <td>{location}</td>
      <td>{state}</td>
      <td>{date}</td>
      <td>{note}</td>
      <td className="table-item__btn">
        <button className="btn-edit">Sửa</button>
        <button className="btn-delete">Xóa</button>
      </td>
    </tr>
  );
}
export default Item;
