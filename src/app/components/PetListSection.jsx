import PetList from "./PetList";

const PetList = async () => {
  const response = await fetch("https://dummyjson.com/products");
  return (
    <section className="grid grid-cols-2 place-items-center justify-items-stretch gap-4 overflow-y-scroll p-5">
      <PetList navn="gunnar" race="pitbull" alder="27 år" />
      <PetList />
      <PetList />
      <PetList />
      <PetList />
      <PetList />
      <PetList />
      <PetList />
      <PetList />
      <PetList />
    </section>
  );
};
 
export default PetListSection;