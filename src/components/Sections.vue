<template>
  <div
    ref="section"
    class="flex items-center justify-center w-full min-h-[50vh] p-4 bg-black text-white">
    <div class="card w-full max-w-6xl mt-0">
      <div class="flex flex-row gap-4 mt-10 w-full">
        <div class="flex flex-col items-center w-full section">
          <div class="text-5xl font-black">{{ counter1 }}+</div>
          <div class="text-5xl font-black text-gray-400 section-text">
            قناة
          </div>
        </div>
        <div class="flex flex-col items-center w-full section">
          <div class="text-5xl font-black">{{ counter2 }}+</div>
          <div class="text-5xl font-black text-gray-400 section-text">
            مسلسل
          </div>
        </div>
        <div class="flex flex-col items-center w-full section">
          <div class="text-5xl font-black">{{ counter3 }}+</div>
          <div class="text-5xl font-black text-gray-400 section-text">
            أفلام
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-10 mt-20 w-full">
        <div class="flex flex-col items-center w-full section">
          <div class="text-5xl font-black section-text">WEB PLAYER</div>
        </div>
        <div class="flex items-center justify-center w-full section text-5xl font-black whitespace-nowrap">
          <div class="text-5xl font-black section-text">التفعيل عن بعد</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sections",
  data() {
    return {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      countersStarted: false,
    };
  },
  methods: {
    animateCounters() {
      const interval = 30;
      const step1 = Math.ceil(7000 / 100);
      const step2 = Math.ceil(4000 / 100);
      const step3 = Math.ceil(15000 / 100);

      const timer = setInterval(() => {
        if (this.counter1 < 7000) this.counter1 += step1;
        if (this.counter2 < 4000) this.counter2 += step2;
        if (this.counter3 < 15000) this.counter3 += step3;

        if (
          this.counter1 >= 7000 &&
          this.counter2 >= 4000 &&
          this.counter3 >= 15000
        ) {
          clearInterval(timer);
        }
      }, interval);
    },
    revealCounters() {
      if (!this.countersStarted) {
        this.countersStarted = true;
        this.animateCounters();
      }
    },
    onScroll() {
      const section = this.$refs.section;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < window.innerHeight && sectionBottom > 0) {
        this.revealCounters();
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
.card {
  border: 8px solid #b4e42f;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  width: 45%;
  min-height: 300px;
  background-color: #000;
  border-radius: 1%;
  font-family: "vip", sans-serif;
}

.section {
  position: relative;
  text-align: center;
  line-height: 1;
}

.section-text {
  position: relative;
  font-family: "vip", sans-serif;
  font-size: 1.5rem;
  line-height: 1;
}

.section-text::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #b4e42f;
  border-radius: 12px;
}

.text-5xl {
  font-size: 3rem;
  font-family: "vip", sans-serif;
  line-height: 1;
}

.text-gray-400 {
  color: #a3a3a3;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.whitespace-nowrap {
  white-space: nowrap;
}
</style>
