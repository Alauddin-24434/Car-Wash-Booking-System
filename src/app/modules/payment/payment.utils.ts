import axios from 'axios';
import dotenv from 'dotenv';
import config from '../../config';

dotenv.config();

const AMARPAY_URL = config.payment_url;
const STORE_ID = config.stote_id;
const SIGNATURE_KEY = config.signature_key;

export const initiatePayment = async (transactionId: string, name: string, email: string, phone: string, address: string, amount: number) => {
    try {
        const response = await axios.post(`${AMARPAY_URL}/jsonpost.php`, {
            store_id: STORE_ID,
            signature_key: SIGNATURE_KEY,
            cus_name: name,
            cus_email: email,
            cus_phone: phone,
            cus_add1: address,
            cus_add2: "Dhaka",
            cus_city: "Dhaka",
            cus_country: "Bangladesh",
            currency: "BDT",
            amount,
            tran_id: transactionId,
            success_url: `https://car-wash-booking-system-liard.vercel.app/api/verify-payment?transactionId=${transactionId}`,
            fail_url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6Z7CgLJ3JfLy4IREsARVyxcBnQQnHN40jw&s`,
            cancel_url: `https://static.vecteezy.com/system/resources/previews/019/797/644/non_2x/failed-rubber-stamp-with-grunge-style-on-white-background-vector.jpg`,
            desc: "Course Fee",
            type: "json"
        });

        return response.data;
    } catch (error) {
        console.error('AmarPay initiation error:', error);
        throw new Error('Payment initiation failed');
    }
};

const AMARPAY_VERIFY_URL = config.payment_verify_url;

export const verifyPaymentWithAmarPay = async (transactionId: string) => {
    try {
        const response = await axios.get(`${AMARPAY_VERIFY_URL}`, {
            params: {
                store_id: STORE_ID,
                signature_key: SIGNATURE_KEY,
                request_id: transactionId,
                type: 'json',
            },
        });
        console.log(response, "verify response");
        return response.data;
    } catch (error) {
        console.error('AmarPay verification error:', error);
        throw new Error('Payment verification failed');
    }
};
