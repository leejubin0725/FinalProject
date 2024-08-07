// src/services/paymentService.ts
import axios from 'axios';

const initiatePayment = async (amount: number) => {
  try {
    const response = await axios.post('http://localhost:8088/paypal/pay', null, {
      params: {
        sum: amount,
      },
    });

    if (response.status === 200 && response.data.redirectUrl) {
      window.location.href = response.data.redirectUrl;
    } else {
      console.error('결제 요청 실패');
    }
  } catch (error) {
    console.error('결제 요청 중 오류 발생', error);
  }
};

export default initiatePayment;
