import GridProducts from "@components/initial/Products"
import { DataService } from "@services/DataService";
import { SyntheticEvent, useState } from "react"

type CreateProductProps = {
  dataService: DataService
};

type CustomEvent = {
  target: HTMLInputElement
};

const CreateProduct = ({ dataService }: CreateProductProps) => {
  const [name, setName] = useState<string>("");
  const [photo, setPhoto] = useState<File | undefined>();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if(name && photo){
      // const id = await dataService.createProduct(name, photo)
      // alert("id: " + id)
    }
  }

  function setPhotoUrl(event:  CustomEvent){
    if(event.target.files && event.target.files[0]){
      setPhoto(event.target.files[0]);
    }
  }
  
  function renderPhoto() {
    if(photo){
      const localPhotoURL = URL.createObjectURL(photo)
      return <img alt='' src={localPhotoURL} style={{maxWidth: "200px"}} />
    }
  }

  return (
    <section className='w-full flex-center flex-col mb-32'>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <label>Name:</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} /><br/>
        <label>Photo:</label>
        <input type="file" onChange={(e)=> setPhotoUrl(e)} /><br/>
        {renderPhoto()}<br/>
        <input type="submit" value="create product" />
      </form>
    </section>
  )
}


export default CreateProduct;