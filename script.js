// function changeContent() {
//      var x = document.getElementById("options").value;
    //  console.log(x);
     const urlData = fetch("https://restcountries.eu/rest/v2/all");
     urlData
       .then((value) => {
         return value.json();
       })
       .then((data) => {
         console.log(data[0].name);
         var div1=[];
         var div2=[];
         var heading=[];
         var image=[];
         var h61=[];
         var h62=[];
         var h63=[];
         var div=document.createElement("div");
         div.className="container";
        for(i=0;i<data.length;i++){
          div1[i]=document.createElement("div");
          div1[i].className="card";
          heading[i]=document.createElement("h5");
          heading[i].innerText=i+1+")"+" "+data[i].name;
          heading[i].className="card-title";
          image[i]=document.createElement("img");
          image[i].className="card-img-top";
          image[i].src=data[i].flag;
          div2[i]=document.createElement("div");
          div2[i].className="card-body";
          h61[i]=document.createElement("h6");
          h61[i].className="card-text";
          h61[i].innerText="Capital:"+data[i].capital;
          h62[i]=document.createElement("h6");
          h62[i].className="card-text";
          h62[i].innerText="Country codes:"+data[i].alpha2Code+","+data[i].alpha3Code;
          h63[i]=document.createElement("h6");
          h63[i].className="card-text";
          h63[i].innerText="Region:"+data[i].region;
          div2[i].append(h61[i],h62[i],h63[i]);
          div1[i].append(heading[i],image[i],div2[i]); 
          div.appendChild(div1[i]);          
        }
document.body.appendChild(div);
       })
       .catch((error) => {
         console.log(error);
       });
   
   
  //  changeContent();
   
   // document.getElementById('section').innerText=data.results[0].section;
   