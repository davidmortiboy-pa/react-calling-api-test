/**
 * Takes http response data and downloads to disk
 * @param data E.g. from axios - response.data
 */
export function download(data) {
  const url = window.URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'file.json');
  document.body.appendChild(link);
  link.click();
}
