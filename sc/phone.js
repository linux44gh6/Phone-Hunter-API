const loadePhone=async(searchText)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data=await res.json()
   phones=(data.data)
//    console.log(phones)
   displayPhone(phones)
}

const  displayPhone=(phones)=>{
  const phoneLen=phones.length;
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.textContent='';

    
    //show the if the data length bigger then 10
    const showALL=document.getElementById('sholl-all-btn')
    if(phoneLen>10){
      showALL.classList.remove('hidden')
    }else{
      showALL.classList.add('hidden')
    }

    //slice the data so that the data not showing over 10
   phones= phones.slice(0,10)


    phones.forEach(phone => {
        console.log(phone)
        const phoneCard=document.createElement('div')
        phoneCard.classList=`card  bg-gray-400 shadow-xl`;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.slug}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
        
        `;
        phoneContainer.appendChild(phoneCard)
    });
}

function searchItem(){
  const searchField=document.getElementById('search-field')
  const searchText=searchField.value;
  loadePhone(searchText)
 
}

// loadePhone()