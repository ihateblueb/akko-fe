<template>
  <div
    v-if="!showNothing"
    class="ScopeSelector"
  >
    <button
      v-if="showDirect"
      class="button-unstyled scope"
      :class="css.direct"
      :title="$t('post_status.scope.direct')"
      type="button"
      @click="changeVis('direct')"
    >
      <IconMail :size="20" />
    </button>
    <button
      v-if="showPrivate"
      class="button-unstyled scope"
      :class="css.private"
      :title="$t('post_status.scope.private')"
      type="button"
      @click="changeVis('private')"
    >
      <IconLock :size="20" />
    </button>
    <button
      v-if="showUnlisted"
      class="button-unstyled scope"
      :class="css.unlisted"
      :title="$t('post_status.scope.unlisted')"
      type="button"
      @click="changeVis('unlisted')"
    >
      <IconHome :size="20" />
    </button>
    <button
      v-if="showPublic"
      class="button-unstyled scope"
      :class="css.public"
      :title="$t('post_status.scope.public')"
      type="button"
      @click="changeVis('public')"
    >
      <IconWorld :size="20" />
    </button>
    <button
      v-if="showLocal"
      class="button-unstyled scope"
      :class="css.local"
      :title="$t('post_status.scope.local')"
      type="button"
      @click="changeVis('local')"
    >
      <IconCurrentLocation :size="20" />
    </button>
  </div>
</template>

<script src="./scope_selector.js"></script>

<style lang="scss">
@import '../../_variables.scss';

.ScopeSelector {
  .scope {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    padding: 4px 8px;

    &.selected svg {
      color: $fallback--lightText;
      color: var(--lightText, $fallback--lightText);
    }
  }
}
</style>
