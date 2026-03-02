import PlanItem from "./PlantItem";

export default function PlantList({ plants, deleteHandler }) {

//When user press delete, the id is used to identify the event to be deleted. 
// The deleteHandler function is called with the event's id as an argument, 
// allowing the parent component to update the state and remove the event from the list.  

function deletePlantHandler(id) {
  const isConfirmed = window.confirm("Are you sure you want to delete this plant?");
  if (isConfirmed) {
    deleteHandler(id);
  }
}

  return (
    <div>
      {plants.map(plant => (
        <div key={plant.id}>
          <PlantItem 
          key = {plant.id}
          plant = {plant}
          deleteHandler = {deletePlantHandler}
          />
        </div>
      ))}
    </div>
  );
}