<template>
  <span
    v-if="matchesExpertLevel"
    class="FloatSetting"
  >
    <label :for="path">
      <slot />
    </label>
    <input
      :id="path"
      class="number-input"
      type="number"
      :step="step || 0.05"
      :disabled="disabled"
      :min="min || 0"
      :max="max || 1"
      :value="state"
      @change="update"
    >
    {{ ' ' }}
    <ModifiedIndicator :changed="isChanged" />
  </span>
</template>

<script src="./float_setting.js"></script>
