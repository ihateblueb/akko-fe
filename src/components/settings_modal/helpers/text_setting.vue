<template>
  <span
    v-if="matchesExpertLevel"
    class="TextSetting"
  >
    <label :for="path">
      <slot />
    </label>
    <textarea
      :id="path"
      class="text-input"
      :disabled="disabled"
      :value="state"
      @change="update"
    />
    {{ ' ' }}
    <ModifiedIndicator :changed="isChanged" />
  </span>
</template>

<script src="./text_setting.js"></script>
