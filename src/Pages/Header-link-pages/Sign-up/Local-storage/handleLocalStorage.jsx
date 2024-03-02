
export default function handleLocalStorage(
  currentCustomerPersonalInformations
) {
  window.localStorage.setItem(
    "currentCustomerPersonalInformations",
    JSON.stringify(currentCustomerPersonalInformations)
  );
  let customersPersonalInformationsDatabse = window.localStorage.getItem(
    "customersPersonalInformationsDatabse"
  );
  customersPersonalInformationsDatabse = JSON.parse(
    customersPersonalInformationsDatabse
  );
  customersPersonalInformationsDatabse.push(
    currentCustomerPersonalInformations
  );
  window.localStorage.setItem(
    "customersPersonalInformationsDatabse",
    JSON.stringify(customersPersonalInformationsDatabse)
  );
}
