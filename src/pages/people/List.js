import React from "react";
import ListPage from "../../components/people/list/ListPage";
import Filter from "../../components/people/list/Filter";

const ListPeople = () => {
  return (
    <>
      <div>
        <Filter />
      </div>
      <ListPage />
    </>
  );
};

export default ListPeople;
export async function loader({ request }) {}
