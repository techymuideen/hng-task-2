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
          { value: "new-products", name: "New Products" },
          { value: "used-products", name: "Used Products" },
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
          { value: "electronics", label: "Electronics" },
          { value: "fashion", label: "Fashion" },
        ]}
      />
    </TableOperations>
  );
}

export default ProductsOperations;
