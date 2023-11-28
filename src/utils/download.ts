import { CodeEnum } from '@/utils/result';
import { message, notification } from 'antd';
import { AxiosResponse } from 'axios';

const download = (response: AxiosResponse) => {
  if (!response) {
    return;
  }
  if (response.headers['content-type'].includes('json')) {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      if (typeof reader.result === 'string') {
        const { code, message } = JSON.parse(reader.result);
        if (CodeEnum.FAILED === code) {
          notification.error({
            description: message,
            message: CodeEnum.ERROR,
          });
        }
      }
    });
    reader.readAsText(response.data, 'utf-8');
  } else {
    if (response.data && response.data.size === 0) {
      notification.error({
        description: '内容为空，无法下载',
        message: CodeEnum.ERROR,
      });
    } else {
        const disposition = response.headers[`content-disposition`];
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download', decodeURI(disposition.split(';')[1].split('filename=')[1]));
        document.body.appendChild(link);
        link.click();
    }
  }
}

export { download };
