const getData = async() =>{
  try{
      const response = await fetch('https://simple-books-api.glitch.me/books');
    if(response.status != 200)
    {
      throw new Error(`Error Data not found ${response.status} - ${response.statusText}`)
    }
    const books = await response.json();
    return {data: books, message: "fetch succesfully", success: true}
  }
  catch(ex: any)
  {
    return {data: null, message: ex.message, success: false}
  } 
}

export default async function Home() {



  const books = await getData();
  // books.map((book, index)=>{
  //   console.log(book);
  // });

  return (
    <>
      {/* <div className="max-w-[1200px] mx-auto mt-10 text-white text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-green-700 h-[100px] py-5 border-4 border-red-600 col-span-2 col-start-2 ">text 1</div>
        <div className="bg-green-700 h-[100px] py-5 border-4 border-red-600">text 2</div>
        <div className="bg-green-700 h-[100px] py-5 border-4 border-red-600">text 3</div>
        <div className="bg-green-700 h-[100px] py-5 border-4 border-red-600 col-span-3">text 3</div>
        <div className="bg-green-700 h-[100px] py-5 border-4 border-red-600">text 4</div>
        <div className="bg-green-700 h-[100px] py-5 border-4 border-red-600">text 5</div>
        <div className="bg-green-700 h-[100px] py-5 border-4 border-red-600">text 6</div>
        <div className="bg-green-700 h-[100px] py-5 border-4 border-red-600">text 7</div>
        <div className="bg-green-700 h-[100px] py-5 border-4 border-red-600 col-span-full">text 8</div>
      </div> */}
      <h1 className="bg-[#567488]">hello</h1>
      <ul>
        {
            books.success ?
            books.data.map((book:any, index:any)=>{
              return <li key={index}>{book.id}. <span>hello</span> {book.name}</li>
            })
            : books.message
        }
        
      </ul>
    </>
  );
}
