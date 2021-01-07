export const exportFile = (url: string) => {
  const aEle = document.createElement('a');
  aEle.href = url;
  aEle.target = '_blank';
  aEle.click();
};

export default {
  exportFile,
};
