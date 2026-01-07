<template>
  <section class="min-h-screen bg-[#F9EBEA] flex items-center justify-center py-12 px-4">
    
    <UCard 
      class="w-full max-w-2xl shadow-xl ring-1 ring-gray-900/5"
      :ui="{ 
        base: 'overflow-hidden',
        background: 'bg-white',
        divide: 'divide-y divide-gray-200',
        rounded: 'rounded-xl',
        body: { padding: 'p-8 sm:p-10' } 
      }"
    >
      <template #header>
        <h2 class="text-2xl font-bold text-gray-900 text-center uppercase tracking-tight">
          Hubungi Kami
        </h2>
      </template>

      <form @submit.prevent="sendEmail" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">
            Nama Lengkap <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="formData.from_name"
            type="text" 
            required
            placeholder="Masukkan nama lengkap Anda"
            class="w-full p-3 border border-gray-300 bg-gray-50/50 focus:outline-none focus:border-[#D34010] focus:ring-1 focus:ring-[#D34010] transition-all"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">
              Email <span class="text-red-500">*</span>
            </label>
            <input 
              v-model="formData.reply_to"
              type="email" 
              required
              placeholder="email@perusahaan.com"
              class="w-full p-3 border border-gray-300 bg-gray-50/50 focus:outline-none focus:border-[#D34010]"
            />
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">
              Perusahaan <span class="text-red-500">*</span>
            </label>
            <input 
              v-model="formData.company"
              type="text" 
              required
              placeholder="Nama instansi/bisnis"
              class="w-full p-3 border border-gray-300 bg-gray-50/50 focus:outline-none focus:border-[#D34010]"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">
            Jabatan <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="formData.job_title"
            type="text" 
            required
            placeholder="Contoh: CEO / Marketing Manager"
            class="w-full p-3 border border-gray-300 bg-gray-50/50 focus:outline-none focus:border-[#D34010]"
          />
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">
            Masalah <span class="text-red-500">*</span>
          </label>
          <textarea 
            v-model="formData.message"
            rows="5" 
            required
            placeholder="Ceritakan kebutuhan brand Anda secara singkat..."
            class="w-full p-3 border border-gray-300 bg-gray-50/50 focus:outline-none focus:border-[#D34010] resize-none"
          ></textarea>
        </div>

        <div class="pt-4">
          <button 
            type="submit" 
            :disabled="isSending"
            class="w-full md:w-auto bg-[#001A72] text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-[#00145a] transition-all active:scale-95 disabled:bg-gray-400"
          >
            {{ isSending ? 'Mengirim...' : 'Submit' }}
          </button>
        </div>
      </form>
    </UCard>
  </section>
</template>

<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const isSending = ref(false);

const formData = ref({
  from_name: '',
  reply_to: '',
  company: '',
  job_title: '',
  message: ''
});

const sendEmail = async () => {
  isSending.value = true;
  try {
    // Masukkan ID EmailJS Anda di sini
    await emailjs.send(
      'SERVICE_ID',
      'TEMPLATE_ID',
      formData.value,
      'PUBLIC_KEY'
    );
    alert('Terima kasih! Pesan Anda telah kami terima.');
    formData.value = { from_name: '', reply_to: '', company: '', job_title: '', message: '' };
  } catch (error) {
    alert('Maaf, terjadi kesalahan teknis.');
  } finally {
    isSending.value = false;
  }
};
</script>