<template>
  <footer class="w-full font-raleway">
    <div class="bg-[#D34010] text-white py-12 px-6">
      <UContainer class="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div class="flex items-center">
          <h2 class="text-3xl md:text-4xl font-black leading-relaxed uppercase tracking-normal">
            A Next Level <br /> of Yours
          </h2>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h3>
          <ul class="space-y-4">
            <li v-for="contact in contactList" :key="contact.name" class="flex items-center gap-3 group">
              <img 
                :src="contact.icon" 
                :alt="contact.name" 
                class="w-5 h-5 object-contain transition-transform group-hover:scale-110" 
              />
              <a 
                :href="contact.link" 
                :target="contact.target || '_self'"
                class="hover:underline text-sm md:text-base font-medium"
              >
                {{ contact.value }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-6 border-b border-white/20 pb-2 inline-block">Follow Us</h3>
          <ul class="space-y-3">
            <li v-for="social in socialMedia" :key="social.name" class="flex items-center gap-3 group">
              <img 
                :src="social.icon" 
                :alt="social.name" 
                class="w-5 h-5 object-contain transition-transform group-hover:scale-110" 
              />
              <a 
                :href="social.link" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="hover:underline text-sm md:text-base font-medium"
              >
                {{ social.username }}
              </a>
            </li>
          </ul>
        </div>

      </UContainer>
    </div>
    
    <div class="bg-[#D34010] py-4 text-center text-white/70 text-xs font-bold uppercase tracking-widest">
      &copy; {{ new Date().getFullYear() }} Rupalakar Design. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// Data Contact Us dalam bentuk Array
const contactList = [
  { 
    name: 'Email', 
    icon: 'ic_email.png', 
    value: 'rupalakardesign@gmail.com', 
    link: 'mailto:rupalakardesign@gmail.com' 
  },
  { 
    name: 'LinkedIn', 
    icon: 'ic_linkedin.png', 
    username: 'rupalakar', 
    value: 'rupalakar', 
    link: 'https://www.linkedin.com/company/rupalakar/about/?viewAsMember=true',
    target: '_blank'
  }
]

// Data Social Media
const socialMedia = [
  { name: 'Facebook', icon: 'ic_fb.png', username: 'rupalakar', link: 'https://facebook.com/rupalakar' },
  { name: 'Instagram', icon: 'ic_ig.png', username: 'rupalakar', link: 'https://www.instagram.com/rupalakar.design/' },
  { name: 'Threads', icon: 'ic_threads.png', username: 'rupalakar', link: 'https://www.threads.com/@rupalakar.design?xmt=AQF05zxiC9gpHV0dD7o2qlrO_UF-ghfP2W6rpCfRczGoXNo' },
  { name: 'Youtube', icon: 'ic_yt.png', username: 'rupalakar', link: 'https://www.youtube.com/@rupalakar' }
]
</script>