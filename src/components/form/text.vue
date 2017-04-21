<template>
	<div class="field-wrapper"> 
    <label :for="id">{{ label }}</label>
    <input type="text" :name="id" :id="id">
  </div> 
</template>

<script>
export default {
  props: ['label', 'id'],
	data () {
		return {
		};
	}
};
</script>

<style scoped>
.usa-input-error {
  border-left: 4px solid #cd2026;
  margin-top: 3rem;
  padding-bottom: 0.8rem;
  padding-left: 1.5rem;
  padding-top: 0.8rem;
  position: relative;
  right: 1.9rem; }
  .usa-input-error input,
  .usa-input-error textarea,
  .usa-input-error select {
	border: 3px solid #cd2026;
	width: calc(100% + 1.9rem); }
  .usa-input-error label {
	margin-top: 0; }
  .usa-input-error .usa-input-inline {
	border: 1px solid #5b616b;
	width: inherit; }
  .usa-input-error .usa-input-inline-error {
	border: 3px solid #cd2026; }

.usa-input-error-label {
  display: block;
  font-size: 1.7rem;
  font-weight: 700; }

.usa-input-error-message {
  color: #cd2026;
  display: block;
  font-size: 1.7rem;
  font-weight: 700;
  padding-bottom: 3px;
  padding-top: 3px; }

.usa-input-required:after {
  color: #981b1e;
  content: ' (*Required)'; }

</style>