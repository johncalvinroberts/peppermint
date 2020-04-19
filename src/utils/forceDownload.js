const forceDownload = async ({ blob, fileName = 'noname' }) => {
  // create an element on the document manually and trigger download
  const blobUrl = window.URL.createObjectURL(blob);
  const el = document.createElement('a');
  el.download = fileName;
  el.style = { display: 'none' };
  el.href = blobUrl;
  document.body.appendChild(el);
  el.click();
  el.remove();
  window.URL.revokeObjectURL(blob);
};

export default forceDownload;
