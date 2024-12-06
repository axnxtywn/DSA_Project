<template>
  <div class="train-class-container">
    <div class="train-class-box">
      <h2>Daftar Kelas Kereta Api</h2>
      <table class="train-class-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kelas</th>
            <th>Deskripsi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(kelas, index) in trainClasses" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ kelas.name }}</td>
            <td>{{ kelas.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainClassPage',
  data() {
    return {
      trainClasses: [
        {
          name: 'Kelas Ekonomi',
          description:
            'Kelas Ekonomi menawarkan tarif yang lebih terjangkau dengan fasilitas standar.',
        },
        {
          name: 'Kelas Bisnis',
          description:
            'Kelas Bisnis memiliki fasilitas lebih baik dibandingkan Kelas Ekonomi, dengan kursi yang lebih nyaman.',
        },
        {
          name: 'Kelas Eksekutif',
          description:
            'Kelas Eksekutif menawarkan kenyamanan premium dengan ruang kaki yang lebih luas dan kursi yang lebih nyaman.',
        },
        {
          name: 'Kelas Luxury',
          description:
            'Kelas Luxury menyediakan fasilitas eksklusif seperti layanan makanan dan minuman, serta kursi yang dapat direbahkan sepenuhnya.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.train-class-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-image: url('@/assets/logokereta.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.train-class-box {
  max-width: 600px;
  padding: 20px;
  background-color: rgba(82, 82, 133, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: white;
}

.train-class-table {
  width: 100%;
  border-collapse: collapse;
}

.train-class-table th,
.train-class-table td {
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3); /* Slightly transparent border */
  text-align: left;
}

.train-class-table th {
  background-color: rgba(0, 123, 255, 0.8); /* Semi-transparent header */
  color: white;
}

.train-class-table td {
  background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent cells */
  color: #333;
}

.train-class-table tr:hover td {
  background-color: rgba(230, 247, 255, 0.5); /* Semi-transparent hover effect */
}
</style>
