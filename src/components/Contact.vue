<template>
    <div class="bg-black wfull flex flex-col">
      <div class="wfull flex  text-4xl font-vip text-white">
        <p class="mxa">أتصل بنا</p>
      </div>
      <div class="w70% mxa" dir="rtl">
            <div class="flex md:flex-row flex-col wfull justify-between my2">
                <input class="md:w48.5% wfull fontbold py4 px2 md:my0 my2 text-black bg-white border-none rounded font-cairo" type="text" placeholder="الشركة أو المنطقة">
                <input class="md:w48.5% wfull fontbold  py4 px2 md:my0 my2 text-black bg-white border-none rounded font-cairo" type="text" placeholder="الأسم و اللقب*">
            </div>
            <div class="flex md:flex-row flex-col wfull justify-between my2">
                <input class="md:w48.5% wfull fontbold  py4 px2 md:my0 my2 text-black bg-white border-none rounded font-cairo" type="text" placeholder="رقم الهاتف">
                <input class="md:w48.5% wfull fontbold  py4 px2 md:my0 my2 text-black bg-white border-none rounded font-cairo" type="text" placeholder="البريد الالكتروني*">
            </div>
            <div class=" flex wfull  my2">
                <textarea class="wfull h30 py4 px2 text-black bg-white border-none rounded font-cairo" type="text" placeholder="رسالتك">
                </textarea>
            </div>
            <button class="wfull bg-#AEDA33 text-black font-lemon text-2xl">send</button>
      </div>

      <div class="justify-between md:h50vh h30vh mta md:w80% w95% flex ma mb4 border-b-2 border-#AEDA33" >
        <div mta>
            <img class="md:wfull w50" src="../assets/Frame10.svg" alt="">
        </div>
        <div mta>
            <ul list-none font-cairo text-white>
                <li my2 md:text-4xl text-xl mb4>FENNEC PLUS</li>
                <li my2 md:text-base text-sm>HONE</li>
                <li my2 md:text-base text-sm>ABOUT</li>
                <li my2 md:text-base text-sm>PARTNERS</li>
                <li my2 md:text-base text-sm>CONTACT</li>
            </ul>
        </div>
        <div mta>
            <ul list-none font-cairo text-white>
                <li md:text-4xl text-2xl mb4>CONTACT</li>
                <li my2 md:text-base text-sm>EMAIL</li>
                <li my2 md:text-base text-sm>TIKTOK</li>
                <li my2 md:text-base text-sm>INSTAGRAM</li>
                <li my2 md:text-base text-sm>TWITTER</li>
            </ul>
        </div>
        <div md:mya mta>
            <div flex flex-col uppercase wfull justify-between mt50  >
                <h2>join our newsletter</h2>
                <div flex>
                    <input class="wfull fontbold py4 px2 text-black bg-white border-none rounded font-cairo rounded-l-2 rounded-r-0" type="text" placeholder="EMAIL ADDRESS">
                    <button class="bg-#AEDA33 rounded-l-0">submit</button>
                </div>
            </div>
        </div>
      </div>
      <div class="bg-#AEDA33 h2 wfull" >
      </div>
    </div>
  </template>
  
  <style scoped>

  </style>
  