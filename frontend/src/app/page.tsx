async function Page() {

  
    const message = await (await fetch("http://localhost:5000/api/home")).json();
 
  return (
    <div>
      <h1>{message.message}</h1>
    </div>
  );
}

export default Page;