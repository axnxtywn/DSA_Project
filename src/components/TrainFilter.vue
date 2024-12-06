<template>
  <div class="train-filter">
    <h2>Daftar Kereta Api</h2>
    <table>
      <thead>
        <tr>
          <th>Nama Kereta</th>
          <th>Kelas</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="train in trains" :key="train.id">
          <td>{{ train.name }}</td>
          <td>{{ train.class }}</td>
          <td>{{ train.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TrainFilter',
  data() {
    return {
      trains: [
        { id: 1, name: 'Argo Bromo', class: 'Eksekutif', price: 'Rp 500.000' },
        { id: 2, name: 'Gajayana', class: 'Bisnis', price: 'Rp 350.000' },
        { id: 3, name: 'Jayabaya', class: 'Ekonomi', price: 'Rp 200.000' },
      ],
    }
  },
}
</script>

<style scoped>
.train-filter {
  margin-top: 20px;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}
</style>
