<template>
    <div class="video-container">
      <div class="title-container">
        <p class="title">كيفاه نفعل التطبيق</p>
      </div>
  
      <div class="video-wrapper">
        <div class="video-cart">
          <video class="video" controls>
            <source src="" type="video/mp4" />
            <p class="video-fallback">Votre navigateur ne prend pas en charge la vidéo.</p>
          </video>
        </div>
        
        <button class="btn-guide">
          <span class="shadow-text">شوف دليل الاستعمال</span>
        </button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .video-container {
    background-color: rgb(10, 0, 0);
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .title-container {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .title {
    font-size: 4rem;
    font-weight: 900;
    font-family: "vip", sans-serif;
  }
  
  .video-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .video-cart {
    border: 5px solid #11b9b1;
    border-radius: 10px;
    width: 50%;
    margin-bottom: 20px;
  }
  
  .video {
    width: 100%;
    height: auto;
  }
  
  .video-fallback {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
  
  .btn-guide {
    background: linear-gradient(to right, #56970B, #B2FF58, #56970B);
    color: white;
    padding: 25px 50px;
    font-size: 2rem;
    font-weight: 1000;
    font-family: "vip", sans-serif;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 40%;
    transition: background-color 0.3s ease;
  }
  
  .btn-guide:hover {
    background: linear-gradient(to right, #B2FF58, #56970B, #B2FF58);
  }
  
  .shadow-text {
    text-shadow: 3px 3px 5px rgba(128, 128, 128, 0.7);
  }
  </style>
  