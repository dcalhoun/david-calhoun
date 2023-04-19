wp.domReady(() => {
  const { removeEditorPanel } = wp.data.dispatch("core/edit-post");

  removeEditorPanel("featured-image");
});
