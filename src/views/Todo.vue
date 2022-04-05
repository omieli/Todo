<template>
  <div class="home">

          <field-add-task 
 />


    <v-tooltip top allow-overflow v-if="$store.state.tasks.length">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          block
          @click="dialogs.clearAll = true"
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Clear all
        </v-btn>
      </template>
      <span>Clear all tasks</span>
    </v-tooltip>
    <dialog-clear-all
      v-if="dialogs.clearAll"
      @close="dialogs.clearAll = false"
      :task="task"
    />

    <list-tasks v-if="$store.state.tasks.length" />

    <no-tasks v-else />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["task"],

  data() {
    return {
      hover: false,
      dialogs: {
        clearAll: false,
      },
    };
  },
  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
    "no-tasks": require("@/components/Todo/NoTasks.vue").default,
    "dialog-clear-all":
      require("@/components/Todo/Dialogs/DialogClearAllTasks.vue").default,
  },
};
</script>
