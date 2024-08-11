import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function ProductsOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="status"
        options={[
          { value: "all", name: "All" },
          { value: "checked-out", name: "Checked out" },
          { value: "checked-in", name: "Checked in" },
          { value: "unconfirmed", name: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "all", label: "All Products" },
          { value: "appliances", label: "Appliances" },
          {
            value: "phone-tablets",
            label: "Phone and Tablets",
          },
          { value: "health-beauty", label: "Health and Beauty" },
          { value: "home-offices", label: "Home and Offices" },
          { value: "Electronics", label: "Health and Beauty" },
          { value: "health-beauty", label: "Health and Beauty" },
        ]}
      />
    </TableOperations>
  );
}

export default ProductsOperations;
