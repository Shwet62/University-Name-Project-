let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");
let para=document.querySelector("#result");

btn.addEventListener("click", async ()=>{
   let input=document.querySelector("input");
   let country=input.value;
    let collegeArray= await getCollege(country);
    Show(collegeArray);
})

function Show(collegeArray){
    let list=document.querySelector("#list");
    list.innerText=" ";

    for(college of collegeArray){
        let li=document.createElement("li");
        li.innerText=college.name;
        list.appendChild(li);
    }
}

async function getCollege(country){
   try{
    let res=await axios.get(url+country);
    return res.data;
   }
   catch(err){
    return "Error Found";
   }
}
