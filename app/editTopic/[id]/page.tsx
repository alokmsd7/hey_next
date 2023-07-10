import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    
    }
  };
  
export default async function EditTopic({ params }: { params: { id: string } }) {
    const {id}=params;
const {topics}=await getTopicById(id);
const {title,description}=topics;
   

    return <EditTopicForm id={id} title={title} description={description}/>;
}