<template>
  <div class="cards-container">
    <div class="md:text-7xl text-4xl font-vip mb5">
      شوف العرض اللي يناسبك
    </div>

    <div class="flex md:flex-row flex-col mxa justify-center gap-8 wfull">
      <div class="card md:m0 mxa ">
        <img src="../assets/Frame6.svg" alt="Card 1" class="card-image" />
        <p class="try-now md:text-5xl text-4xl">جربها مع داركم</p>
      </div>

      <div class="card md:m0 mxa ">
        <img src="../assets/card1.svg" alt="Card 2" class="card-image" />
        <p class="enjoy-year md:text-5xl text-4xl">تهنا عام كامل</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  background-color: black;
  /* background-color: red; */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
}

.main-title {
  font-size: 5rem; 
  font-weight: 900; 
  margin-bottom: 20px; 
  text-align: center;
  font-family: "vip", sans-serif;
}

.cards-wrapper {
  display: flex;
  flex-direction: row;
  gap: 30px; 
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card {
  background-color: rgba(255, 255, 255, 0.1); 
  border: 5px solid #11b9b1; 
  border-radius: 15px;
  padding: 10px; 
  text-align: center;
  width: 550px; 
  height: 550px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box; 
}

.card-image {
  width: 100%;
  height: 380px; 
  object-fit: contain; 
  margin-bottom: 10px; 
}

.try-now,
.enjoy-year {
  font-family: "vip", sans-serif;
  /* font-size: 3rem; 
  font-weight: 900;  */
  color: white;
  margin-top: 10px;
}
</style>
