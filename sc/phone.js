const loadePhone=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data=await res.json()
   phones=(data.data)
//    console.log(phones)
   displayPhone(phones)
}

const  displayPhone=(phones)=>{
    const phoneContainer=document.getElementById('phone-container');
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
loadePhone()