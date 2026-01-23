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
            <li v-for="contact in contactListItems" :key="contact.name" class="flex items-center gap-3 group">
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
            <li v-for="social in socialMediaItems" :key="social.name" class="flex items-center gap-3 group">
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

<script setup >
import { contactListItems } from '~/data/contactitems';
import { socialMediaItems } from '~/data/socialmediaItems';
</script>