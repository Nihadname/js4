let Company = {
    name: "Lorem",
    address: "baki",
    createdTime: "21.01.2022",
    endDate: "22.12.2023"
};
let Company2 = {
    name: "Kamil",
    address: "qebele",
    createdTime: "24.01.2022",
    endDate: "22.10.2023"
};
let Company3 = {
    name: "ilankes",
    address: "quba",
    createdTime: "23.01.2022",
    endDate: "22.11.2023"
};
let Companies = [Company, Company2, Company3];
let Names = [];
Companies.forEach(function(item) {
    if (item.name.startsWith('i')) {
        Names.push(item);
    }
}); 
console.log(Names)

  let Array1=Companies.filter(c=>c.name[0].toUpperCase()=='i'.toUpperCase()&&(c.createdTime=="23.01.2022"&&c.endDate=="22.11.2023"));
  console.log(Array1)