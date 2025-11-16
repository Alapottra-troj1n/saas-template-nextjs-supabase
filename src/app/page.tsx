import { createClient } from "@/lib/server";



export default async function Home() {


const supabase  = await createClient();

  const { data: todos } = await supabase
    .from("todos")
    .select("*");

  console.log(todos);


  return (
    <div className="font-poppins" >
        <h2>Hello World</h2>
    </div>
  );
}
