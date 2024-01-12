<script setup>
import { ref } from 'vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const dialogVisible = ref(false),
  input = ref(''),
  editData = ref(null)

const reset = () => {
  input.value = ''
  editData.value = null
}

const handleUserBehavior = () => {
  console.log(input.value, editData.value)
  // do something based on user behavior

  // reset edit data
  reset()
}

const confirm = () => {
  handleUserBehavior()
  dialogVisible.value = false
}

const handleEdit = (index, row) => {
  dialogVisible.value = true
  // keep current edit data
  editData.value = row
}
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
    <el-table-column label="Operation">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%">
    <el-input v-model="input" placeholder="Please input" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
