<template>
  <div class="row">
    <cl-button>Default</cl-button>
    <cl-button type="primary">Primary</cl-button>
    <cl-button type="success">Success</cl-button>
    <cl-button type="info">Info</cl-button>
    <cl-button type="warning">Warning</cl-button>
    <cl-button type="danger">Danger</cl-button>
  </div>

  <div class="row">
    <cl-button plain>Plain</cl-button>
    <cl-button type="primary" plain>Primary</cl-button>
    <cl-button type="success" plain>Success</cl-button>
    <cl-button type="info" plain>Info</cl-button>
    <cl-button type="warning" plain>Warning</cl-button>
    <cl-button type="danger" plain>Danger</cl-button>
  </div>

  <div class="row">
    <cl-button round>Round</cl-button>
    <cl-button type="primary" round>Primary</cl-button>
    <cl-button type="success" round>Success</cl-button>
    <cl-button type="info" round>Info</cl-button>
    <cl-button type="warning" round>Warning</cl-button>
    <cl-button type="danger" round>Danger</cl-button>
  </div>
</template>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
}

.cl-button {
  margin-right: 15px;
}
</style>
