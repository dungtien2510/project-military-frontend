function Item(props) {
  const {
    id,
    name,
    level,
    location,
    position,
    birthday,
    dateArmy,
    home,
    address,
  } = props.data;

  return (
    <tr className="table-item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{level}</td>
      <td>{position}</td>
      <td>{location}</td>
      <td>{birthday}</td>
      <td>{dateArmy}</td>
      <td>{home}</td>
      <td>{address}</td>

      <td className="table-item__btn">
        <button className="btn-edit">Sửa</button>
        <button className="btn-delete">Xóa</button>
      </td>
    </tr>
  );
}
export default Item;
