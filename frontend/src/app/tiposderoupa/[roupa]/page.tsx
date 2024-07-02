
export default function Roupas({ params }: { params: { roupa:string} }){
 

    return (
      <div>
       <h1>{params.roupa}</h1> 
      </div>
    );
}