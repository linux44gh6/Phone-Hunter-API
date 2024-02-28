const loadePhone=async(searchText='iphone')=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data=await res.json()
   phones=(data.data)
//    console.log(phones)
   displayPhone(phones)
   toggleSpiner(false)
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
        // console.log(phone)
        const phoneCard=document.createElement('div')
        phoneCard.classList=`card  bg-gray-400 shadow-xl`;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.slug}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button onclick="showModal('${phone.slug}');openModal.showModal()" class="btn btn-primary w-full">Show Details</button>
          </div>
        </div>
        
        `;
        phoneContainer.appendChild(phoneCard)
        // toggleSpiner(false)
    });
}

// after click on the button the data will be show
function searchItem(){
  // toggleSpiner()
  const searchField=document.getElementById('search-field')
  const searchText=searchField.value;
  loadePhone(searchText)
  toggleSpiner(true)
 
}

// function for show the spiner after click on the button

const toggleSpiner=(isTrue)=>{
  const spinerDiv=document.getElementById('sppiner')
 if(isTrue){
  spinerDiv.classList.remove('hidden')
 }else{
  spinerDiv.classList.add('hidden')
 }
}


//show the phone details in the modal
const showModal=async(id)=>{
  const res=await fetch (`https://openapi.programming-hero.com/api/phone/${id}`)
  const data=await res.json()
  console.log(data.data)
  showPhoneDetails(data.data)
}

const showPhoneDetails=(phone)=>{
  console.log(phone)
  const showDetailPhoneContainer=document.getElementById('show-details-ophone-container');
  showDetailPhoneContainer.innerHTML=`
  <img class="flex justify-center items-center" src="${phone.image}" alt="">
  <h1 class="font-bold text-lg">${phone.slug}</h1>
  <p class="font-bold text-lg">${phone.mainFeatures.chipSet}</p>
  <p class="font-bold text-lg"> storage:${phone.mainFeatures.storage} </p>
  `
}

loadePhone()