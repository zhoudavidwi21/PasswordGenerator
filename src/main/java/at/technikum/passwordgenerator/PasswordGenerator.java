package at.technikum.passwordgenerator;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
public class PasswordGenerator {

    private static final String CHAR_SET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    private static final Random random = new SecureRandom();

    public static String generatePassword() {
        return IntStream.range(0, 10)
                .map(i -> CHAR_SET.charAt(random.nextInt(CHAR_SET.length())))
                .mapToObj(c -> String.valueOf((char) c))
                .collect(Collectors.joining());
    }
}
