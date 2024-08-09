package com.kh.last.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class SmsService {

    private static final Logger logger = LoggerFactory.getLogger(SmsService.class);

    @Value("${coolsms.api_key}")
    private String apiKey;

    @Value("${coolsms.api_secret}")
    private String apiSecret;

    @Value("${coolsms.from}")
    private String from;

    // 인증번호를 저장하기 위한 Map
    private final Map<String, String> verificationCodes = new ConcurrentHashMap<>();

    public String sendVerificationCode(String to) throws CoolsmsException {
        String generatedCode = generateVerificationCode(); // Generate a random 4-digit code
        System.out.println("생성된 코드는" + generatedCode);
        Message coolsms = new Message(apiKey, apiSecret);

        HashMap<String, String> params = new HashMap<>();
        params.put("to", to); // 수신 전화번호
        params.put("from", from); // 발신 전화번호
        params.put("type", "sms");
        params.put("text", "인증번호는 [" + generatedCode + "] 입니다.");

        coolsms.send(params); // 메시지 전송

        // 인증번호를 Map에 저장
        verificationCodes.put(to, generatedCode);

        // 로깅 추가
        logger.info("Sent verification code [{}] to phone number [{}]", generatedCode, to);

        return generatedCode;
    }

    public boolean verifyCode(String phoneNumber, String code) {
        // 저장된 인증번호를 가져와서 비교
    	System.out.println("입력 코드는" + code);

        String storedCode = verificationCodes.get(phoneNumber);
        System.out.println("입력후 코드는" + storedCode);

        if (storedCode != null && storedCode.equals(code)) {
            // 인증 성공 시, 인증번호를 제거
            verificationCodes.remove(phoneNumber);
            // 로깅 추가
            logger.info("Verification successful for phone number [{}]", phoneNumber);
            return true;
        }
        // 로깅 추가
        logger.warn("Verification failed for phone number [{}]. Expected [{}], but got [{}]", phoneNumber, storedCode, code);
        return false;
    }

    private String generateVerificationCode() {
        Random random = new Random();
        int code = 1000 + random.nextInt(9000); // Generate a random 4-digit code
        return Integer.toString(code);
    }
}
