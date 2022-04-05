<template>
  <v-tooltip top allow-overflow>
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="newTaskTitle"
        @keyup.enter="addTask"
        class="pa-3"
        outlined
        label="Add Task"
        hide-details
        clearable
        v-bind="attrs"
        v-on="on"
      >
        <template v-slot:append>
          <v-icon
            @click="addTask"
            color="primary"
            :disabled="newTaskTitleInvalid"
          >
            mdi-plus
          </v-icon>
        </template>
      </v-text-field>
              </template>
        <span>Enter task and add to task list</span>
      </v-tooltip>
    </template>

    <script>
      export default {
        data() {
          return {
            newTaskTitle: "",
          };
        },
        computed: {
          newTaskTitleInvalid() {
            return !this.newTaskTitle;
          },
        },
        methods: {
          addTask() {
            if (!this.newTaskTitleInvalid) {
              this.$store.dispatch("addTask", this.newTaskTitle);
              this.newTaskTitle = "";
            }
          },
        },
      };
    </script></v-tooltip
  >
</template>
