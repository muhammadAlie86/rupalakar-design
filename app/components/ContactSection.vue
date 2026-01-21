<template>
  <section class="flex items-center justify-center py-6 px-6 bg-[#F9EBEA]">
    <div class="w-full ">
    <header class="mb-12 text-center">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 uppercase tracking-[0.2em]">
          {{ title }}
        </h2>
        <div class="mt-2 h-1 w-full bg-[#D34010] mx-auto"></div>
      </header>

    

      <form @submit.prevent="sendEmail" class="grid grid-cols-1 gap-y-8">

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2.5 mx-2.5">
            Nama Lengkap <span class="text-red-500">*</span>
          </label>
          <input
            v-model="form.from_name"
            required
            placeholder="Masukkan nama lengkap Anda"
            class="w-full px-5 py-4 mx-2.5 border border-gray-300 rounded-lg bg-gray-50/50
                   focus:outline-none focus:border-[#D34010]
                   focus:ring-2 focus:ring-[#D34010]/20 transition-all"
          />
        </div>

        <!-- Email & Company -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2.5 mx-2.5">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.reply_to"
              type="email"
              required
              placeholder="email@perusahaan.com"
              class="w-full px-5 py-4 mx-2.5 border border-gray-300 rounded-lg bg-gray-50/50
                     focus:outline-none focus:border-[#D34010]
                     focus:ring-2 focus:ring-[#D34010]/20 transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2.5 mx-2.5">
              Perusahaan <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.company"
              required
              placeholder="Nama instansi / bisnis"
              class="w-full px-5 py-4 mx-2.5 border border-gray-300 rounded-lg bg-gray-50/50
                     focus:outline-none focus:border-[#D34010]
                     focus:ring-2 focus:ring-[#D34010]/20 transition-all"
            />
          </div>
        </div>

        <!-- Jabatan -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2.5 mx-2.5">
            Jabatan <span class="text-red-500">*</span>
          </label>
          <input
            v-model="form.job_title"
            required
            placeholder="Contoh: CEO / Marketing Manager"
            class="w-full px-5 py-4 mx-2.5 border border-gray-300 rounded-lg bg-gray-50/50
                   focus:outline-none focus:border-[#D34010]
                   focus:ring-2 focus:ring-[#D34010]/20 transition-all"
          />
        </div>

        <!-- Message -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2.5 mx-2.5">
            Masalah <span class="text-red-500">*</span>
          </label>
          <textarea
            v-model="form.message"
            rows="5"
            required
            placeholder="Ceritakan kebutuhan brand Anda secara singkat..."
            class="w-full p-5 border border-gray-300 rounded-lg bg-gray-50/50 resize-none
                   focus:outline-none focus:border-[#D34010] mx-2.5
                   focus:ring-2 focus:ring-[#D34010]/20 transition-all"
          />
        </div>

        <!-- Submit -->
        <div class="pt-6 flex justify-center">
          <button
            type="submit"
            :disabled="isSending"
            class="w-full md:w-auto min-w-[200px]
                   bg-[#001A72] text-white px-16 py-4 rounded-lg
                   font-bold uppercase tracking-widest
                   hover:bg-[#00145a] shadow-lg transition-all
                   active:scale-95 disabled:bg-gray-400"
          >
            {{ isSending ? 'Mengirim...' : submitText }}
          </button>
        </div>

      </form>
      </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Hubungi Kami' },
  submitText: { type: String, default: 'Submit' }
})

const emit = defineEmits(['success', 'error'])

const isSending = ref(false)
const initialForm = {
  from_name: '',
  reply_to: '',
  company: '',
  job_title: '',
  message: ''
}
const form = ref({ ...initialForm })

const sendEmail = async () => {
  if (isSending.value) return
  isSending.value = true
  
  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: form.value
    })

    alert('Pesan berhasil dikirim')
    emit('success', response)
    resetForm()
  } catch (err) {
    console.error('SMTP Error:', err)
    alert('Gagal mengirim pesan. Silahkan Coba lagi.')
    emit('error', err)
  } finally {
    isSending.value = false
  }
}

const resetForm = () => {
  form.value = { ...initialForm }
}
</script>
